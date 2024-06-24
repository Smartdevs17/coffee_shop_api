/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SubMenu } from './interface/submenu.interface';
import { Model } from 'mongoose';
import { CreateSubMenuDto } from './dto/create-submenu.dto';

@Injectable()
export class SubmenuService {
    constructor(@InjectModel("SubMenu") private readonly subMenuModel: Model<SubMenu>){}

    async createSubMenu(createSubMenuDto: CreateSubMenuDto): Promise<SubMenu>{
        const newSubMenu = new this.subMenuModel(createSubMenuDto);
        return newSubMenu.save();
    }

    async findAllSubMenus(): Promise<SubMenu[]>{
        return await this.subMenuModel.find().exec();
    }

    async findOneSubMenu (id: string): Promise<SubMenu>{
        return await this.subMenuModel.findById(id).exec();
    }

    async updateSubMenu(id: string, createSubMenuDto: CreateSubMenuDto): Promise<SubMenu>{
        return await this.subMenuModel.findByIdAndUpdate(id, createSubMenuDto, { new: true }).exec();
    }

    async deleteSubMenu(id: string){
        return await this.subMenuModel.findByIdAndDelete(id).exec();
    }
}
