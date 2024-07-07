import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../user/schema/user.schema';
import { IsUsernameOrEmailUniqueConstraint } from './dto/username-email.constraints';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy, ],
  imports: [
    MongooseModule.forFeature([{ name: "User", schema: userSchema }]),
    PassportModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET}`,
      signOptions: { expiresIn: "36000s" },
      global: true,
    }),
  ],
})
export class AuthModule {}

