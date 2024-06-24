import * as mongoose from "mongoose";
import { Menu } from "../interface/menu.interface";

export const menuSchema = new mongoose.Schema<Menu>({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: String
},{
    timestamps: true
});