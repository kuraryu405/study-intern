import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Body, Post } from '@nestjs/common'; 



@Controller('users')
export class UsersController {
    @Post()
    create(@Body() CreateUser: CreateUserDto){

        return CreateUser
    }
}

