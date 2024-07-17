import { UUID } from 'crypto';
import {
  ArtEntity,
  ArtEntityArray,
} from 'src/app/art/art-base/entities/art.entity';
import { FeaturedArtEntity } from 'src/app/art/art-user-featured/entity/FeaturedArt';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {
  UserRolesType,
  UserStatusType,
  UserSystemRolesType,
  userRoles,
  userStatus,
  userSystemRoles,
} from '../models/user.model';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column('text', {
    unique: true,
  })
  username: string;

  @Column('text', {
    unique: true,
  })
  email: string;

  @Column('text', {
    select: false,
  })
  password: string;

  @Column('enum', {
    enum: Object.values(userStatus),
    default: userStatus.Active,
  })
  status: UserStatusType;

  @Column('boolean', {
    default: false,
  })
  emailVerified: boolean;

  @Column('enum', {
    array: true,
    enum: userSystemRoles,
    default: [userSystemRoles.User],
  })
  systemRoles: UserSystemRolesType;

  @Column('enum', {
    array: true,
    enum: userRoles,
  })
  roles: UserRolesType;

  @OneToMany(() => ArtEntity, (art) => art.owner)
  artsOwned: ArtEntityArray;

  @ManyToMany(() => ArtEntity, (art) => art.collaborators)
  @JoinTable()
  artsCollaboration: ArtEntityArray;

  @OneToMany(() => FeaturedArtEntity, (featuredArt) => featuredArt.user)
  featuredArt: FeaturedArtEntity;
}

export type UserEntityArray = UserEntity[];

export type UserKey = keyof UserEntity;
