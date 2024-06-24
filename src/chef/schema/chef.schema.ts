import * as mongoose from "mongoose";
import { Chef } from "../interface/chef.interface";

export const chefSchema = new mongoose.Schema<Chef>({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    bio: String,
    email: String,
    address: String,
    phone: String,
})