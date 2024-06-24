import { Document, Schema } from "mongoose";

export interface SubMenu extends Document{
    readonly id: string;
    menuId: Schema.Types.ObjectId;
    name: string;
    image: string;
    price: number;
    rating: number;
    readonly createdAt: Date;
    updatedAt: Date;
}