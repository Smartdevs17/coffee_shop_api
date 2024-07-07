import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateUserDto{
    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsNotEmpty({message: "email is required"})
    @IsEmail()
    email: string;

    @IsNotEmpty({message: "password is required"})
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    avatar: string;
}