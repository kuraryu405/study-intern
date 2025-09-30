import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users/dto/create-user.dto';

@Injectable()
export class UsersService {
  users: CreateUserDto[] = [];
  create(CreateUser: CreateUserDto){
    this.users.push(user);

  }

}