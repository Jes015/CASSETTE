import { IsObject } from 'class-validator';
import { ArtEntityArray } from '../../art-base/entities/art.entity';

export class UpdateArtUserFeaturedDto {
  @IsObject({
    each: true,
  })
  newArtArray: ArtEntityArray;
}
