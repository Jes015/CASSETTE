import { UUID } from 'crypto';
import { UserEntity } from 'src/app/user/entities/user.entity';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ArtEntity, ArtEntityArray } from '../../art-base/entities/art.entity';

@Entity('featured-art')
export class FeaturedArtEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @OneToOne(() => UserEntity, (userEntity) => userEntity.featuredArt)
  @JoinColumn()
  user: UserEntity;

  @ManyToMany(() => ArtEntity, (artEntity) => artEntity.featuredArts)
  @JoinTable()
  featuredArts: ArtEntityArray;
}
