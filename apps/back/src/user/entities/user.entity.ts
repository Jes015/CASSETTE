import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('enum', {
    enum: ['banned', 'active', 'suspend', 'timeout'],
  })
  status: 'banned' | 'active' | 'suspend' | 'timeout';

  @Column('boolean', {
    default: false,
  })
  emailVerified: boolean;
}
