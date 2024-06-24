/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from './interface/menu.interface';
import { CreateMenuDto } from './dto/create-menu.dto';

@Injectable()
export class MenuService {
    constructor(@InjectModel("Menu") private readonly menuModel: Model<Menu>){}

    async createMenu(createMenuDto: CreateMenuDto): Promise<Menu>{
        const newMenu = new this.menuModel(createMenuDto);
        return newMenu.save();
    }

    async findAllMenu(): Promise<Menu[]>{
        return await this.menuModel.find().exec();
    }

    async findOneMenu(id: string): Promise<Menu>{
        return await this.menuModel.findById(id).exec();
    }

    async updateMenu(id: string, createMenuDto: CreateMenuDto){
        return await this.menuModel.findByIdAndUpdate(id, createMenuDto, {new: true}).exec();
    }

    async deleteMenu(id: string){
        return await this.menuModel.findByIdAndDelete(id).exec();
    }
}
