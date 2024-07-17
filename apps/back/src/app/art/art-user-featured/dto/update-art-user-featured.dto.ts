import { IsNumber, IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class UpdateArtUserFeaturedDto {
  @IsUUID()
  artId: UUID;

  @IsNumber()
  newOrderArt: number;
}
