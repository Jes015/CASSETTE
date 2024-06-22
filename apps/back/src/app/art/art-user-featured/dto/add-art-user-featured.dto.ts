import { IsUUID } from 'class-validator';
import { UUID } from 'crypto';

export class AddArtUserFeaturedDto {
  @IsUUID()
  artIdToAdd: UUID;
}
