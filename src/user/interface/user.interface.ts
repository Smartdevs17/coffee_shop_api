import { Document } from "mongoose";

export interface User extends Document{
    readonly id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
    phone: string;
    isAdmin: Boolean;
    readonly createdAt: Date;
    updatedAt: Date;
}