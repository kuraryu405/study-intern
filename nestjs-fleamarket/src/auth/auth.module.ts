import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthModule } from './dto/auth/auth.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [AuthModule],
})
export class AuthModule {}
