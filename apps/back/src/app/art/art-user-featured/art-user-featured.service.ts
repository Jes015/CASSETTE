import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { DeepPartial, Repository } from 'typeorm';
import { ArtEntity } from '../art-base/entities/art.entity';
import { UpdateArtUserFeaturedDto } from './dto/update-art-user-featured.dto';
import { FeaturedArtEntity } from './entity/FeaturedArt';

@Injectable()
export class ArtUserFeaturedService {
  constructor(
    @InjectRepository(FeaturedArtEntity)
    private readonly artFeaturedRepository: Repository<FeaturedArtEntity>,
    @InjectRepository(ArtEntity)
    private readonly artRepository: Repository<ArtEntity>,
  ) {}

  async getUserFeaturedArts(userId: UUID) {
    const featuredArtFound = await this.artFeaturedRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['featuredArts'],
    });

    return featuredArtFound;
  }

  async addUserFeaturedArt(userFeaturedArtId: UUID, userId: UUID) {
    await this.verifyArtExistsAndUserOwnerOrCollaborator(
      userFeaturedArtId,
      userId,
    );

    // Verify featured art relation exits, otherwise it create it
    let featureArtToSave: DeepPartial<FeaturedArtEntity> | null = null;
    const featuredArtRelationFound = await this.artFeaturedRepository.findOne({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['featuredArts'],
    });

    if (featuredArtRelationFound == null) {
      const featureArtCreated = this.artFeaturedRepository.create({
        user: { id: userId },
        featuredArts: [{ id: userFeaturedArtId }],
      });

      featureArtToSave = featureArtCreated;
    } else {
      //Verify if the user has just 4 or less featured arts
      const isMaxLengthFeaturedArt =
        featuredArtRelationFound.featuredArts.length > 3;

      if (isMaxLengthFeaturedArt) {
        throw new ConflictException('You can just add 4 featured arts');
      }

      // Verify if the art is already in the list
      const isArtAlreadyInList = featuredArtRelationFound.featuredArts.some(
        (art) => art.id === userFeaturedArtId,
      );

      if (isArtAlreadyInList) {
        throw new ConflictException(
          `The art with id ${userFeaturedArtId} is already in the list`,
        );
      }

      // Set values to the variable that is going to be saved
      featureArtToSave = {
        ...featuredArtRelationFound,
        featuredArts: [
          ...featuredArtRelationFound.featuredArts,
          { id: userFeaturedArtId },
        ],
      };
    }

    return await this.artFeaturedRepository.save(featureArtToSave);
  }

  async updateUserFeaturedArt(
    artListFeaturedId: UUID,
    { newArtArray }: UpdateArtUserFeaturedDto,
    userId: UUID,
  ) {
    // Verify the art exits
    const artFeaturedFound = await this.artFeaturedRepository.findOne({
      where: {
        id: artListFeaturedId,
        user: {
          id: userId,
        },
      },
    });

    if (artFeaturedFound == null) {
      throw new NotFoundException(
        `Featured list with id ${artListFeaturedId} not found`,
      );
    }

    // Verify arts exits and the user is the owner or a collaborator
    await Promise.all(
      newArtArray.map((art) =>
        this.verifyArtExistsAndUserOwnerOrCollaborator(art.id, userId),
      ),
    );

    artFeaturedFound.featuredArts = newArtArray;

    return await this.artFeaturedRepository.save(artFeaturedFound);
  }

  async deleteUserFeaturedArt(userFeaturedArtId: UUID, userId: UUID) {
    const foundFeaturedList = await this.artFeaturedRepository.findOne({
      where: {
        featuredArts: {
          id: userFeaturedArtId,
        },
        user: {
          id: userId,
        },
      },
      relations: ['featuredArts', 'user'],
    });

    if (foundFeaturedList == null) {
      throw new NotFoundException(`Art with id ${userFeaturedArtId} not found`);
    }

    const newFeaturedArtList = foundFeaturedList.featuredArts.filter(
      (art) => art.id !== userFeaturedArtId,
    );

    await this.artFeaturedRepository.save({
      ...foundFeaturedList,
      featuredArts: newFeaturedArtList,
    });

    return `Art with id ${userFeaturedArtId} has been removed`;
  }

  private async verifyArtExistsAndUserOwnerOrCollaborator(
    userArtIdToFeature: UUID,
    userId: UUID,
  ) {
    // Verify art to add exits
    const artFound = await this.artRepository.findOne({
      where: [
        { id: userArtIdToFeature, owner: { id: userId } },
        { id: userArtIdToFeature, collaborators: { id: userId } },
      ],
      relations: ['owner', 'collaborators'],
    });

    if (artFound == null) {
      throw new NotFoundException(
        `Art with id ${userArtIdToFeature} not found`,
      );
    }
  }
}
