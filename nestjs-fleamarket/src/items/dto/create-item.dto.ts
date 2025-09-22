import { IsString, IsNotEmpty, MaxLength, IsNumber, Min, IsOptional } from 'class-validator';
export class CreateItemDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(40)
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    price: number;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    description?: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}