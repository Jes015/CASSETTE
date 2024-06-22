import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { ArtEntity } from '../art-base/entities/art.entity';

@Injectable()
export class ArtUserService {
  constructor(
    @InjectRepository(ArtEntity)
    private readonly artRepository: Repository<ArtEntity>,
  ) {}

  async getUserArts(userId: UUID) {
    const artsFound = await this.artRepository.find({
      where: { owner: { id: userId } },
      order: { created_at: 'DESC' },
      relations: ['collaborators'],
      /* skip: 10,
      take: 10, */
    });

    return artsFound;
  }
}
