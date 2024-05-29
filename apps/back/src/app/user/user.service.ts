import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UUID } from 'crypto';
import { adaptResponse } from 'src/common/utils/response.util';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findOne(userId: UUID) {
    const userFound = await this.userRepository.findOneBy({ id: userId });

    if (userFound == null) return;

    return adaptResponse(200, userFound);
  }
}
