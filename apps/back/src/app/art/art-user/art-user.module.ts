import { Module } from '@nestjs/common';
import { AuthModule } from 'src/app/auth/auth.module';
import { UserModule } from 'src/app/user/user.module';
import { ArtBaseModule } from '../art-base/art.module';
import { ArtUserController } from './art-user.controller';
import { ArtUserService } from './art-user.service';

@Module({
  imports: [AuthModule, UserModule, ArtBaseModule],
  controllers: [ArtUserController],
  providers: [ArtUserService],
})
export class ArtUserModule {}
