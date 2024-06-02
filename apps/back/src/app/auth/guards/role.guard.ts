import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/app/user/entities/user.entity';
import { UserSystemRolesArrayType } from 'src/app/user/models/user.model';
import { BadCredentialsException } from 'src/common/exceptions/BadCredentials.exception';
import { SetRoles } from '../decorators/set-roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext) {
    const validRoles = this.reflector.get(SetRoles, context.getHandler());

    if (!Array.isArray(validRoles) || validRoles?.[0] == null) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const userData = request.user as UserEntity;
    const userRoles = userData.systemRoles;

    if (userData == null) {
      throw new BadCredentialsException();
    }

    const hasValidRoles = (validRoles as UserSystemRolesArrayType).every(
      (role) => userRoles.includes(role),
    );

    if (!hasValidRoles) {
      const intlInstance = new Intl.ListFormat('en', {
        style: 'long',
        type: 'conjunction',
      });

      throw new UnauthorizedException(
        `Roles needed for this route: ${intlInstance.format(validRoles)}`,
      );
    }

    return true;
  }
}
