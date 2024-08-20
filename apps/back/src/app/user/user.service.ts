import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isUUID } from 'class-validator';
import { UUID } from 'crypto';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';
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

  async updateUser(userId: UUID, updateUserDto: UpdateUserDto) {
    const isUpdateUserDtoEmpty = Object.values(updateUserDto).every(
      (value) => value == null,
    );

    if (isUpdateUserDtoEmpty) {
      throw new BadRequestException();
    }
    const userFound = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (userFound == null) {
      throw new NotFoundException(`user with id ${userId} not found`);
    }

    const newUserData: UserEntity = {
      ...userFound,
      ...updateUserDto,
      id: userId,
    };

    const userUpdated = await this.userRepository.save(newUserData);

    return userUpdated;
  }
}
