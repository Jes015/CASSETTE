import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { UserEntity, UserKey } from 'src/app/user/entities/user.entity';

export const GetUser = createParamDecorator(
  (userKey: UserKey, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as UserEntity;

    return userKey ? user?.[userKey] : user;
  },
);
