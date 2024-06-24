/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { ChefService } from './chef.service';
import { CreateChefDto } from './dto/create-chef.dto';

@Controller("chefs")
export class ChefController {
    constructor(private readonly chefService: ChefService){}

    @Post("")
    async create(@Body() createChefDto: CreateChefDto){
        try {
            const createdChef = await this.chefService.createChef(createChefDto);
            return {
                success: true,
                message: "chef created successfully",
                data: createdChef
            }
        } catch (error) {
            throw new HttpException("an error occurred",500);
        }
    }

    @Get("all")
    async findAll(){
        const chefs = await this.chefService.findAllChef();
        return {
            success: true,
            message: "chefs retrieved successfully",
            data: chefs
        }
    }

    @Get(":id")
    async findOne(@Param("id") id: string){
        const chef = await this.chefService.findChef(id);
        return {
            success: true,
            message: "chef retrieved successfully",
            data: chef
        }
    }

    @Put(":id")
    async updateChef(@Param("id") id: string, @Body() createChefDto: any){
        const updatedChef = await this.chefService.updateChef(id, createChefDto);
        return {
            success: true,
            message: "chef updated successfully",
            data: updatedChef
        }
    }

    @Delete(":id")
    async deleteChef(@Param("id") id: string){
        const deletedChef = await this.chefService.deleteChef(id);
        return {
            success: true,
            message: "chef deleted successfully",
            data: deletedChef
        }
    }
}
