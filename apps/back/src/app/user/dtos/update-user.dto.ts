import { PartialType } from '@nestjs/mapped-types';
import {
  IsEnum,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { userRoles, UserRolesType } from '../models/user.model';

export class UpdateUserDtoNotPartial {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  @Matches(/^[a-zA-Z0-9_-]+$/, {
    message: 'The username should not contain symbols or operators.',
  })
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(200)
  description: string;

  @IsUrl({}, { each: true })
  socials: string[];

  @IsUrl()
  avatar: string;

  @IsEnum(userRoles, {
    each: true,
  })
  roles: UserRolesType;
}

export class UpdateUserDto extends PartialType(UpdateUserDtoNotPartial) {}
