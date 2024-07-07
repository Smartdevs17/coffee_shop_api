import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
  Request,
  UseFilters,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { validateOrReject, validate } from 'class-validator';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { ExceptionsLoggerFilter } from 'src/exceptions/exceptionLogger.filter';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UseFilters(ExceptionsLoggerFilter)
  async register(@Body() registerDto: RegisterDto) {

    try {      
      // Validate the DTO using class-validator
      await validateOrReject(registerDto)
      // If validation succeeds, proceed with registration
      const newUser = await this.authService.registerUser(registerDto);

      return {
        success: true,
        message: 'User successfully registered',
        data: newUser,
      };
    } catch (error) {
      console.log(error);
      
      // Handle Validation Errors
      if (error instanceof Array) {
        const formattedErrors = error.map((validationError) => ({
          field: validationError.property,
          message: Object.values(validationError.constraints)[0],
        }));

        throw new HttpException(
          {
            success: false,
            message: 'Validation failed',
            errors: formattedErrors,
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        // Internal Server Errors
        throw new HttpException(
          'Internal server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req,@Body() loginDto: LoginDto) {
    return await this.authService.loginUser(req.user);
  }
}
