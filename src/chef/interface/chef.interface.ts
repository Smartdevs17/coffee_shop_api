import { Document } from "mongoose";

export interface Chef extends Document {
    readonly id: string;
    name: string;
    title: string;
    bio: string;
    image: string;
    address: string;
    phone: string;
    email: string;
    readonly createdAt: Date;
    updatedAt: Date;
}