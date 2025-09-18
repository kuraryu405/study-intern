import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../generated/prisma';
import { Body, Post } from '@nestjs/common';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User>{
    return await this.authService.createUser(createUserDto);
  }
}
