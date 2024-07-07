import { Body, Controller, Delete, Get, HttpException, Param, Put, UseFilters, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ExceptionsLoggerFilter } from 'src/exceptions/exceptionLogger.filter';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from '../auth/guard/jwt-auth.guard';


@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get("all")
    @UseFilters(ExceptionsLoggerFilter)
    async findAllUser(){
        const allUsers = await this.userService.findAllUser()

        return {
            success: true,
            message: "all users found",
            data: allUsers
        }
    }

    @Get(":id")
    @UseFilters(ExceptionsLoggerFilter)
    async findOneUser(@Param("id") id: string){
        const user = await this.userService.findOneUser(id);
        if(!user){
            throw new HttpException("user not found", 404);
        }

        return {
            success: true,
            message: "user found successfully",
            data: user
        }
    }

    @Put(":id")
    @UseFilters(ExceptionsLoggerFilter)
    async updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto){
        try {
            const updatedUser = await this.userService.updateUser(id, updateUserDto);
            if(!updatedUser){
                throw new HttpException("user not found", 404);
            }

            return {
                success: true,
                message: "User updated successfully",
                data: updatedUser
            }
        } catch (error) {
            throw new HttpException("an error occurred", 500)
        }
    }

    @Delete(":id")
    @UseFilters(ExceptionsLoggerFilter)
    async deleteUser(@Param("id") id: string){
        const deletedUser = await this.userService.deleteUser(id);
        if(!deletedUser){
            throw new HttpException("user not found", 404);
        }

        return {
            success: true,
            message: "User deleted successfully",
            data: deletedUser
        }
    }
}
