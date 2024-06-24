import { IsNotEmpty, IsString } from "class-validator";

export class CreateMenuDto {
    @IsNotEmpty({message: "name is required"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "image is required"})
    @IsString()
    image: string;

    @IsString()
    category: string;
}