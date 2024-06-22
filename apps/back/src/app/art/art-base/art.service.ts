import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { createAndSaveEntry } from 'src/common/utils/postgres.util';
import { Repository } from 'typeorm';
import { UserEntity, UserEntityArray } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';
import { CreateArtDto } from './dto/create-art.dto';
import { UpdateArtDto } from './dto/update-art.dto';
import { ArtEntity, ArtEntityPartial } from './entities/art.entity';

@Injectable()
export class ArtService {
  constructor(
    @InjectRepository(ArtEntity)
    private readonly artRepository: Repository<ArtEntity>,

    private readonly userService: UserService,
  ) {}

  async create(createArtDto: CreateArtDto, user: UserEntity) {
    const collaborators = await this.getCollaborators(createArtDto, user.id);

    const newArt: ArtEntityPartial = {
      ...createArtDto,
      collaborators,
      owner: user,
    };

    const artCreated = await createAndSaveEntry<ArtEntity>(
      this.artRepository,
      newArt,
    );

    return artCreated;
  }

  async findAll() {
    return await this.artRepository.find({
      relations: ['owner', 'collaborators'],
      order: { created_at: { direction: 'DESC' } },
    });
  }

  async findOne(artId: UUID) {
    const artFound = await this.artRepository.findOne({
      where: { id: artId },
      relations: ['owner', 'collaborators'],
    });

    if (artFound == null) {
      throw new NotFoundException(`Art with id ${artId} not found`);
    }

    return artFound;
  }

  async update(artId: UUID, updateArtDto: UpdateArtDto, userId: UUID) {
    const artFound = await this.artRepository.findOne({
      where: {
        id: artId,
        owner: {
          id: userId,
        },
      },
    });

    if (artFound == null) {
      throw new NotFoundException(`Art with id ${artId} not found`);
    }

    const collaborations =
      (await this.getCollaborators(updateArtDto, userId)) ??
      artFound.collaborators;

    const newArtUpdated: ArtEntity = {
      ...artFound,
      ...updateArtDto,
      collaborators: collaborations,
    };

    console.log({ ...updateArtDto });
    const artUpdated = await this.artRepository.save(newArtUpdated);
    console.log({ ...artUpdated });

    return artUpdated;
  }

  async remove(artId: UUID, userId: UUID) {
    const { affected } = await this.artRepository.delete({
      id: artId,
      owner: { id: userId },
    });

    if (affected === 0) {
      throw new NotFoundException(`Art with id ${artId} not found`);
    }

    return `Art with id ${artId} deleted`;
  }

  private async getCollaborators(
    createArtDto: CreateArtDto | UpdateArtDto,
    currentUserId: UUID,
  ) {
    const collaborators: UserEntityArray =
      createArtDto?.collaborators == null ? null : [];

    if (createArtDto?.collaborators != null) {
      for (let a = 0; a < createArtDto?.collaborators.length; a++) {
        const userId = createArtDto?.collaborators[a];

        if (currentUserId === userId) {
          throw new BadRequestException(
            'You can not assign the same user to the collaborators list. This will be reported with your ip',
          );
        }

        const userFound = await this.userService.findOne(userId);

        collaborators.push(userFound);
      }
    }

    return collaborators;
  }
}
