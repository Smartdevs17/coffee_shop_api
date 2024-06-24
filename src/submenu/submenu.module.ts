import { SubmenuService } from './submenu.service';
import { SubmenuController } from './submenu.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { submenuSchema } from './schema/submenu.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "SubMenu", schema: submenuSchema}])],
  controllers: [SubmenuController],
  providers: [SubmenuService],
})
export class SubmenuModule {}
