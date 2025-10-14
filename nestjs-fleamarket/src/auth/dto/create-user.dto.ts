import { UserStatus } from '../../../generated/prisma';
import { IsString, IsNotEmpty, MaxLength, MinLength, IsStrongPassword, IsEmail, IsEnum } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(2)
    name: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
s                                                                                                                                                                                                                                                                                                        @MinLength(8)
    email: string;
    
    @IsStrongPassword({
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    password: string;
    @IsEnum(UserStatus)
    status: UserStatus;

}