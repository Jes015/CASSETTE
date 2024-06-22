import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ArtBaseModule } from './art-base/art.module';
import { ArtUserFeaturedModule } from './art-user-featured/art-user-featured.module';
import { ArtUserModule } from './art-user/art-user.module';

@Module({
  imports: [
    ArtUserModule,
    ArtBaseModule,
    ArtUserFeaturedModule,
    RouterModule.register([
      {
        path: 'art',
        module: ArtBaseModule,
        children: [
          {
            path: 'user',
            module: ArtUserModule,
            children: [
              {
                path: 'featured',
                module: ArtUserFeaturedModule,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class ArtModule {}
