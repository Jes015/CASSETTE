import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(userId: string) {
    let query: unknown = { username: userId as string };

    if (isUUID(userId)) {
      query = { id: userId as UUID };
    }

    const userFound = await this.userRepository.findOne({
      where: query,
    });

    if (userFound == null) {
      throw new NotFoundException(
        `User with id or username ${userId} not found`,
      );
    }

    return userFound;
  }
}
