import { Controller, Get } from '@nestjs/common';
import { UUID } from 'crypto';
import { Auth } from 'src/app/auth/decorators/auth.decorator';
import { GetUser } from 'src/app/auth/decorators/user.decorator';
import { ArtUserService } from './art-user.service';

@Controller()
export class ArtUserController {
  constructor(private readonly artService: ArtUserService) {}

  @Get()
  @Auth()
  getUserArts(@GetUser('id') userId: UUID) {
    return this.artService.getUserArts(userId);
  }
}
