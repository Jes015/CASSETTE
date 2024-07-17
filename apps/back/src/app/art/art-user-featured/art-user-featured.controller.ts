import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { Auth } from 'src/app/auth/decorators/auth.decorator';
import { GetUser } from 'src/app/auth/decorators/user.decorator';
import { ArtUserFeaturedService } from './art-user-featured.service';
import { AddArtUserFeaturedDto } from './dto/add-art-user-featured.dto';
import { UpdateArtUserFeaturedDto } from './dto/update-art-user-featured.dto';

@Controller()
export class ArtUserFeaturedController {
  constructor(private readonly artService: ArtUserFeaturedService) {}

  @Get(':userId')
  async getUserFeaturedArts(@Param('userId', ParseUUIDPipe) userId: UUID) {
    return await this.artService.getFeaturedArts(userId);
  }

  @Post()
  @Auth()
  async addUserFeaturedArt(
    @Body() { artIdToAdd }: AddArtUserFeaturedDto,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.addFeaturedArt(artIdToAdd, userId);
  }

  @Delete(':artId')
  @Auth()
  async deleteUserFeaturedArt(
    @Param('artId') artId: UUID,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.deleteFeaturedArt(artId, userId);
  }

  @Patch()
  @Auth()
  async updateUserFeaturedArt(
    @Body() updateArtDto: UpdateArtUserFeaturedDto,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.updateFeaturedArts(updateArtDto, userId);
  }
}
