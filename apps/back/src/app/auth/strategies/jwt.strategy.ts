import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from 'src/app/user/entities/user.entity';
import { userStatus } from 'src/app/user/models/user.model';
import { BadCredentialsException } from 'src/common/exceptions/BadCredentials.exception';
import { Repository } from 'typeorm';
import { JwtPayload } from '../models/jwt.model';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({
      secretOrKey: configService.get('AUTH_SECRET'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload) {
    if (payload.id == null) {
      throw new BadCredentialsException(`Bad credentials in jwt: id not found`);
    }

    const user = await this.userRepository.findOneBy({ id: payload.id });

    if (user == null) {
      throw new BadCredentialsException(
        `Bad credentials in jwt: User with id ${payload.id} not found`,
      );
    } else if (user.status !== userStatus.Active) {
      throw new UnauthorizedException(`The user have a ${user.status} status`);
    }

    return user;
  }
}
