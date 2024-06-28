import { Type } from 'class-transformer';
import { IsNumber, IsUUID, ValidateNested } from 'class-validator';
import { UUID } from 'crypto';

class UpdateArtDto {
  @IsUUID()
  artId: UUID;

  @IsNumber()
  newOrderLArt: number;
}

export class UpdateArtUserFeaturedDto {
  @ValidateNested()
  @Type(() => UpdateArtDto)
  rightArt: UpdateArtDto;

  @ValidateNested()
  @Type(() => UpdateArtDto)
  leftArt: UpdateArtDto;
}
