/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';

@Controller("menus")
export class MenuController {
    constructor(private readonly menuService: MenuService){}

    @Post()
    async create(@Body() createMenuDto: CreateMenuDto){
        try {
            const newMenu = await this.menuService.createMenu(createMenuDto);
            return {
                success: true,
                message: "menu created successfully",
                data: newMenu
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

    @Get("all")
    async findAll(){
        try {
            const menus = await this.menuService.findAllMenu();
            return {
                success: true,
                message: "menus retrieved successfully",
                data: menus
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

    @Get(":id")
    async findOne(@Param("id") id: string){
        try {
            const menu = await this.menuService.findOneMenu(id);
            return {
                success: true,
                message: "menu retrieved successfully",
                data: menu
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

    @Put(":id")
    async updateMenu(@Param("id") id: string, updateMenuDto: CreateMenuDto){
        try {
            const updatedMenu = await this.menuService.updateMenu(id,updateMenuDto);
            return {
                success: true,
                message: "menu updated successfully",
                data: updatedMenu
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

    @Delete(":id")
    async delete(@Param("id") id: string){
        try {
            const deletedMenu = await this.menuService.deleteMenu(id);
            return {
                success: true,
                message: "menu deleted successfully",
                data: deletedMenu
            }
        } catch (error) {
            return new HttpException("an error occurred", 500);
        }
    }

}
