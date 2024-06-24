import * as mongoose from "mongoose";
import { SubMenu } from "../interface/submenu.interface";

export const submenuSchema = new mongoose.Schema<SubMenu>({
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: [true, 'image is required']
    },
    price: Number,
    rating: Number
},{
    timestamps: true
});