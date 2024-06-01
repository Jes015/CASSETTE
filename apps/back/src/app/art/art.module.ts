import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ArtController } from './art.controller';
import { ArtService } from './art.service';
import { ArtEntity } from './entities/art.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtEntity]), AuthModule, UserModule],
  controllers: [ArtController],
  providers: [ArtService],
})
export class ArtModule {}
