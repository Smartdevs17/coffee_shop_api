import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@ValidatorConstraint({ name: 'IsUsernameOrEmailUniqueConstraint', async: true })
@Injectable()
export class IsUsernameOrEmailUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {
    
 }
 
  async validate(value: any, args: ValidationArguments) {
    // Check if the username or email is already in use in the database
    const [field] = args.constraints;
    console.log(this.userService);
    
    const user = await this.userService.findOneByField(field, value);
    console.log(user);
    
    return !user; // Return true if the username or email is unique, false otherwise
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} is already in use.`;
  }
}


