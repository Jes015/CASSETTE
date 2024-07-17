import { Controller, Get, Param } from '@nestjs/common';
import { UUID } from 'crypto';
import { ArtUserService } from './art-user.service';

@Controller()
export class ArtUserController {
  constructor(private readonly artService: ArtUserService) {}

  @Get(':userId')
  getUserArts(@Param('userId') userId: UUID) {
    return this.artService.getUserArts(userId);
  }
}
