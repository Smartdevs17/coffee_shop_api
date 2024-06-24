import { IsNotEmpty, IsNumber, IsString } from "class-validator";



export class CreateSubMenuDto {
    @IsNotEmpty({message: "menuId"})
    @IsString()
    menuId: string;

    @IsNotEmpty({message: "name is required"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "image is required"})
    @IsString()
    image: string;

    @IsNotEmpty({message: "price is required"})
    @IsNumber()
    price: Number;

    @IsNotEmpty({message: "rating is required"})
    @IsNumber()
    rating: Number;
}