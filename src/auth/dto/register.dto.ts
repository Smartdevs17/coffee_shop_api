import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, Validate } from "class-validator";
import { IsUsernameOrEmailUniqueConstraint } from "./username-email.constraints";


export class RegisterDto{
    @IsOptional()
    @IsString()
    @MinLength(5, {message: "should have the minimum length"})
    // @Validate(IsUsernameOrEmailUniqueConstraint, ["username"], {message: "Username is already in use"})
    username: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsNotEmpty({message: "email is required"})
    @IsEmail()
    // @Validate(IsUsernameOrEmailUniqueConstraint, ["email"], {message: "Email is already in use"})
    email: string;

    @IsNotEmpty({message: "password is required"})
    @IsString()
    @MinLength(5, {message: "should have the minimum length"})
    password: string;

    @IsOptional()
    @IsString()
    avatar: string;
}