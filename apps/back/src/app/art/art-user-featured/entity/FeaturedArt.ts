import { UUID } from 'crypto';
import { UserEntity } from 'src/app/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ArtEntity } from '../../art-base/entities/art.entity';

@Entity('featured-art')
@Unique(['user', 'featuredArt'])
export class FeaturedArtEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.featuredArt)
  user: UserEntity;

  @Column('numeric', {
    nullable: false,
  })
  order: number;

  @ManyToOne(() => ArtEntity, (artEntity) => artEntity.featuredArts)
  featuredArt: ArtEntity;
}

export type FeaturedArtEntityArray = FeaturedArtEntity[];
