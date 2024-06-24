import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { menuSchema } from './schema/menu.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "Menu", schema: menuSchema}])],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
