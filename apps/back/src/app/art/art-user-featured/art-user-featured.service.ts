import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { createAndSaveEntry } from 'src/common/utils/postgres.util';
import { Repository } from 'typeorm';
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

  async getFeaturedArts(userId: UUID) {
    const artsFound = await this.artFeaturedRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: {
        featuredArt: {
          owner: true,
          collaborators: true,
        },
      },
      order: {
        order: 'ASC',
      },
    });

    return artsFound;
  }

  async addFeaturedArt(artId: UUID, userId: UUID): Promise<FeaturedArtEntity> {
    const artsFound = await this.getFeaturedArts(userId);

    const artsLimitLength = 4;
    // Validate if the user can add arts
    if (artsFound.length >= artsLimitLength) {
      throw new ConflictException(
        `You can just add ${artsLimitLength} featured arts`,
      );
    }

    // Validate if the artId exits
    await this.verifyArtExistsAndUserOwnerOrCollaborator(artId, userId);

    // Find the lower order value and set the nextOrderValue
    let lowerOrderValue = 0;
    let nextOrderValue = 0;

    artsFound.forEach((artFound) => {
      if (artFound.order > lowerOrderValue) {
        lowerOrderValue = artFound.order;
      }
    });

    nextOrderValue = Number(lowerOrderValue) + 1;

    const artSaved = await createAndSaveEntry(this.artFeaturedRepository, {
      featuredArt: {
        id: artId,
      },
      user: {
        id: userId,
      },
      order: nextOrderValue,
    });

    const artFound = await this.artRepository.findOne({
      where: {
        id: artId,
      },
      relations: ['owner', 'collaborators'],
    });

    return { ...artSaved, featuredArt: artFound };
  }

  async deleteFeaturedArt(featuredArtId: UUID, userId: UUID) {
    const { affected } = await this.artFeaturedRepository.delete({
      id: featuredArtId,
      user: {
        id: userId,
      },
    });

    if (affected === 0) {
      throw new NotFoundException(`Art with id ${featuredArtId} not found`);
    }

    return `Art Featured with id ${featuredArtId} deleted`;
  }

  async updateFeaturedArts(
    { artId, newOrderArt }: UpdateArtUserFeaturedDto,
    userId: UUID,
  ) {
    await this.verifyArtExistsAndUserOwnerOrCollaborator(artId, userId);

    // Verify that the featured arts exits
    const artFound = await this.verifyFeaturedArt(userId, artId);

    artFound.order = newOrderArt;

    return await this.artFeaturedRepository.save(artFound);
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
    });

    if (artFound == null) {
      throw new NotFoundException(
        `Art with id ${userArtIdToFeature} not found`,
      );
    }
  }

  private async verifyFeaturedArt(userId: UUID, featuredArtId: UUID) {
    const featuredArtFound = await this.artFeaturedRepository.findOne({
      where: {
        user: {
          id: userId,
        },
        featuredArt: {
          id: featuredArtId,
        },
      },
    });

    if (featuredArtFound == null) {
      throw new NotFoundException(
        `Featured art with id ${featuredArtId} not found`,
      );
    }

    return featuredArtFound;
  }
}
