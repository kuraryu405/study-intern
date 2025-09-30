import { IsString, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    @MinLength(2)
    readonly name: string;
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    @MinLength(8)
    readonly password: string;
}