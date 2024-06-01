import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.artService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artService.remove(+id);
  }
}
