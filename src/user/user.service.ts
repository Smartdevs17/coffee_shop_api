import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>){}

    async createUser(createUserDto: CreateUserDto): Promise<User>{
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    findAllUser(){
        return this.userModel.find().exec();
    }

    findOneUser(id: string){
        return this.userModel.findById(id);
    }

    async findByEmail(email: string){
        return await this.userModel.findOne({email});
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>{
        const filter = {_id: id};
        return await this.userModel.findByIdAndUpdate(filter,updateUserDto,{new: true});
    }

    deleteUser(id: string){
        return this.userModel.findByIdAndDelete(id);
    }

    async findOneByField(field: string, value: string): Promise<User | null>{
        try {
            const user  = await this.userModel.findOne({[field]: value}).exec()
            return user;
        } catch (error) {
            console.error("Error in findOneByField: ",error.message);
            throw error;
        }
    }

    async findUser(query: any) {
        try {
            const users = await this.userModel.find({ $or: query });
            return users;
        } catch (error) {
            console.error("Error in findingUser: ", error.message);
            throw error;
        }
    }
    
}
