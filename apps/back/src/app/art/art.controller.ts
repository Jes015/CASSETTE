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
import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators/user.decorator';
import { UserEntity } from '../user/entities/user.entity';
import { ArtService } from './art.service';
import { CreateArtDto } from './dto/create-art.dto';

@Controller('art')
export class ArtController {
  constructor(private readonly artService: ArtService) {}

  @Post()
  @Auth()
  create(@Body() createArtDto: CreateArtDto, @GetUser() user: UserEntity) {
    return this.artService.create(createArtDto, user);
  }

  @Get()
  findAll() {
    return this.artService.findAll();
  }

  @Get(':artId')
  findOne(@Param('artId', ParseUUIDPipe) id: UUID) {
    return this.artService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.artService.update(+id);
  }

  @Delete(':artId')
  @Auth()
  remove(
    @Param('artId', ParseUUIDPipe) artId: UUID,
    @GetUser('id') userId: UUID,
  ) {
    return this.artService.remove(artId, userId);
  }
}
