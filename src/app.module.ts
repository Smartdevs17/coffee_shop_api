import { ChefModule } from './chef/chef.module';
import { SubmenuModule } from './submenu/submenu.module';
import { BlogModule } from './blog/blog.module';
import { MenuModule } from './menu/menu.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';

dotenv.config()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ChefModule, SubmenuModule, BlogModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
