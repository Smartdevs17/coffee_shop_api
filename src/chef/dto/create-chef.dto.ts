import { IsNotEmpty, IsOptional, IsString } from "class-validator";




export class CreateChefDto{
    @IsNotEmpty({message: "name is required"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "title is required"})
    @IsString()
    title: string;

    @IsNotEmpty({message: "image is required"})
    @IsString()
    image: string;

    @IsNotEmpty({message: "bio is required"})
    @IsString()
    bio: string;

    @IsNotEmpty({message: "email is required"})
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    phone: string;
}