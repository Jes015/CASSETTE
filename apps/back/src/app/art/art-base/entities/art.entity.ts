import { UUID } from 'crypto';
import { UserEntity, UserEntityArray } from 'src/app/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { FeaturedArtEntity } from '../../art-user-featured/entity/FeaturedArt';
import { ArtTypeType, artType } from '../models/art.model';

@Entity('Art')
@Unique(['title', 'owner'])
export class ArtEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  videoLink: string;

  @Column('text')
  imageLink: string;

  @Column('text')
  audioLink: string;

  @Column('enum', {
    enum: artType,
  })
  type: ArtTypeType;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: number;

  @ManyToOne(() => UserEntity, (user) => user.artsOwned)
  owner: UserEntity;

  @ManyToMany(() => UserEntity, (user) => user.artsCollaboration)
  collaborators: UserEntityArray;

  @OneToMany(
    () => FeaturedArtEntity,
    (featuredArtEntity) => featuredArtEntity.featuredArt,
  )
  featuredArts: FeaturedArtEntity;
}

export type ArtEntityPartial = Partial<ArtEntity>;

export type ArtEntityArray = ArtEntity[];
