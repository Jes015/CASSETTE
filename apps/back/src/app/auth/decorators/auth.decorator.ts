import { UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserSystemRolesArrayType } from 'src/app/user/models/user.model';
import { RoleGuard } from '../guards/role.guard';
import { SetRoles } from './set-roles.decorator';

export const Auth = (...roles: UserSystemRolesArrayType) =>
  applyDecorators(
    SetRoles([...roles, 'User']),
    UseGuards(AuthGuard(), RoleGuard),
  );
