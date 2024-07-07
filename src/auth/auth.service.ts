import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { User } from '../user/interface/user.interface';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService: JwtService){}

    async validate(email: string, password: string){

        const user = await this.userService.findByEmail(email);
        if(user && (await bcrypt.compare(password, user.password))){
            const result = user.toJSON();
            return result;         
        }

        return null;
    }

    async loginUser(user: User){    
        const payload = {
            username: user.username,
            sub: user.email
        }        

        return {
            ...user,
            accessToken: await this.jwtService.signAsync(payload),
        }
    }

    async registerUser(registerDto: RegisterDto){
        const newUser = await this.userService.createUser(registerDto);
        return newUser;
    }

}
