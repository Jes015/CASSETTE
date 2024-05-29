import { Reflector } from '@nestjs/core';
import { UserSystemRolesArrayType } from 'src/app/user/models/user.model';

export const SetRoles = Reflector.createDecorator<UserSystemRolesArrayType>();
