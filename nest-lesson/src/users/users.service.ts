import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
    users: CreateUserDto[] = [];
    create(CreateUser: CreateUserDto){
        this.users.push(CreateUser);
    }
}
