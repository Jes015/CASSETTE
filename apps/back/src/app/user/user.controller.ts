import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UUID } from 'crypto';
import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators/user.decorator';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Auth()
  @Patch()
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @GetUser('id') userId: UUID,
  ) {
    return this.userService.updateUser(userId, updateUserDto);
  }
}
