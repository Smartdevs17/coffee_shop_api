import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class LoginDto{
    @IsNotEmpty({message: "email is required"})
    @IsEmail()
    // @Validate(IsUsernameOrEmailUniqueConstraint, ["email"], {message: "Email is already in use"})
    username: string;

    @IsNotEmpty({message: "password is required"})
    @IsString()
    password: string;

}