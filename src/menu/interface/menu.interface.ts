import { Document } from "mongoose";

export interface Menu extends Document{
    readonly id: string;
    name: string;
    image: string;
    category: string;
    readonly createdAt: Date;
    updatedAt: Date;
}