import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/app/auth/auth.module';
import { UserModule } from 'src/app/user/user.module';
import { ArtBaseModule } from '../art-base/art.module';
import { ArtUserFeaturedController } from './art-user-featured.controller';
import { ArtUserFeaturedService } from './art-user-featured.service';
import { FeaturedArtEntity } from './entity/FeaturedArt';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forFeature([FeaturedArtEntity]),
    ArtBaseModule,
  ],
  controllers: [ArtUserFeaturedController],
  providers: [ArtUserFeaturedService],
})
export class ArtUserFeaturedModule {}
