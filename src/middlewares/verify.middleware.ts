/* eslint-disable prefer-const */
import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/user/user.service';

@Injectable()
export class VerificationMiddleware implements NestMiddleware {
  constructor(private userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { username, email } = req.body;
    const query: any = [];
    if (username) {
      query.push({ username: username?.toLowerCase() });
    }

    if (email) {
      query.push({ email });
    }
        
    const users = await this.userService.findUser(query);
    let message = '';    

    if (users.length) {
      for (let user of users) {
        if (email && user.email == email) {
          message = 'Account with email already exists';
        }
        if (username && user.username == username.toLowerCase()) {
          message = 'Account with username already exists';
        }

        throw new BadRequestException({
          status: 'error',
          message,
        });
      }
    }
    next();
  }
}
