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
  @Auth()
  async getUserFeaturedArts(@Param('userId', ParseUUIDPipe) userId: UUID) {
    return await this.artService.getUserFeaturedArts(userId);
  }

  @Post()
  @Auth()
  async addUserFeaturedArt(
    @Body() { artIdToAdd }: AddArtUserFeaturedDto,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.addUserFeaturedArt(artIdToAdd, userId);
  }

  updateUserFeaturedArts() {}

  @Delete(':artId')
  @Auth()
  async deleteUserFeaturedArt(
    @Param('artId') artId: UUID,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.deleteUserFeaturedArt(artId, userId);
  }

  @Patch(':artId')
  @Auth()
  async updateUserFeaturedArt(
    @Param('artId') artListFeaturedId: UUID,
    @Body() updateArtDto: UpdateArtUserFeaturedDto,
    @GetUser('id') userId: UUID,
  ) {
    return await this.artService.updateUserFeaturedArt(
      artListFeaturedId,
      updateArtDto,
      userId,
    );
  }
}
