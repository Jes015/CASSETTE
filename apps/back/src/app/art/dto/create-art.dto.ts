import {
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { UUID } from 'crypto';
import { ArtTypeType, artType } from '../models/art.model';

export class CreateArtDto {
  @IsString()
  @MaxLength(80)
  title: string;

  @IsString()
  @MaxLength(400)
  description: string;

  @IsUrl({
    protocols: ['https'],
    require_protocol: true,
  })
  videoLink: string;

  @IsUrl({
    protocols: ['https'],
    require_protocol: true,
  })
  imageLink: string;

  @IsUrl({
    protocols: ['https'],
    require_protocol: true,
  })
  audioLink: string;

  @IsEnum(artType)
  type: ArtTypeType;

  @IsOptional()
  @IsUUID('all', { each: true })
  collaborators: UUID[];
}
