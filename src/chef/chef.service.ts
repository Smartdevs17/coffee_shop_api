/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chef } from './interface/chef.interface';
import { CreateChefDto } from './dto/create-chef.dto';

@Injectable()
export class ChefService {
    constructor(@InjectModel("Chef") private readonly chefModel: Model<Chef>){}

    async createChef(createChefDto: CreateChefDto): Promise<Chef>{
        const newChef = new this.chefModel(createChefDto);
        return newChef.save();
    }

    async findAllChef(): Promise<Chef[]>{
        return await this.chefModel.find().exec();
    }

    async findChef(id: string): Promise<Chef>{
        return await this.chefModel.findById(id).exec();
    }

    async updateChef(id: string, createChefDto: CreateChefDto){
        return await this.chefModel.findByIdAndUpdate(id, createChefDto).exec();
    } 

    async deleteChef(id: string){
        return await this.chefModel.findByIdAndDelete(id).exec();
    }
}
