import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync, hashSync } from 'bcrypt';
import { BadCredentialsException } from 'src/common/exceptions/BadCredentials.exception';
import { createAndSaveEntry } from 'src/common/utils/postgres.util';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import { SignInDto, SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const userPreloaded = await this.userRepository.findOne({
      where: { email: signInDto.email },
      select: {
        id: true,
        username: true,
        email: true,
        emailVerified: true,
        password: true,
        description: true,
        roles: true,
        status: true,
        systemRoles: true,
      },
    });

    if (userPreloaded == null) {
      throw new BadCredentialsException();
    }

    const isValidUser = compareSync(signInDto.password, userPreloaded.password);

    if (!isValidUser) {
      throw new BadCredentialsException();
    }

    return this.getUserAndJwt(userPreloaded);
  }

  async signUp(signUpDto: SignUpDto) {
    signUpDto.password = hashSync(signUpDto.password, 10);

    const userData = await createAndSaveEntry<UserEntity>(
      this.userRepository,
      signUpDto,
    );

    return this.getUserAndJwt(userData);
  }

  public async checkUser(key: 'username' | 'email', value: string) {
    const userFound = await this.userRepository.findOneBy({ [key]: value });

    if (userFound != null) {
      throw new ConflictException(`${value} already exits`);
    }

    return 'OK';
  }

  private async getUserAndJwt(user: UserEntity) {
    const publicUserData: Partial<UserEntity> = structuredClone(user);

    delete publicUserData.password;

    const tokenPayload = { id: user.id };

    return {
      user: publicUserData,
      token: await this.jwtService.signAsync(tokenPayload),
    };
  }

  async deleteUsers() {
    this.userRepository.delete({});
  }
}
