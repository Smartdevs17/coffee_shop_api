/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { SubmenuService } from './submenu.service';
import { CreateSubMenuDto } from './dto/create-submenu.dto';

@Controller("submenu")
export class SubmenuController {
    constructor(private readonly subMenuService: SubmenuService){}

    @Post()
    async create(@Body() createSubMenuDto: CreateSubMenuDto){
        try {
            const newSubMenu = await this.subMenuService.createSubMenu(createSubMenuDto);
            return {
                success: true,
                message: "submenu created successfully",
                data: newSubMenu
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

    @Get("all")
    async findAll(){
        const submenus = await this.subMenuService.findAllSubMenus();
       return {
           success: true,
           message: "submenus retrieved successfully",
           data: submenus
       }
    }

    @Get(":id")
    async findOne(@Param("id") id: string){
        const submenu = await this.subMenuService.findOneSubMenu(id);
        return {
            success: true,
            message: "submenu retrieved successfully",
            data: submenu
        }
    }

    @Put(":id")
    async update(@Param("id") id: string, @Body() updateSubMenuDto: any){
        const updatedSubMenu = await this.subMenuService.updateSubMenu(id, updateSubMenuDto);
        return {
            success: true,
            message: "submenu updated successfully",
            data: updatedSubMenu
        }
    }

    @Delete(":id")
    async delete(@Param("id") id: string){
        const deletedSubMenu = await this.subMenuService.deleteSubMenu(id);
        return {
            success: true,
            message: "submenu deleted successfully",
            data: deletedSubMenu
        }
    }

}
