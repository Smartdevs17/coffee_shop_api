import { ChefService } from './chef.service';
import { ChefController } from './chef.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { chefSchema } from './schema/chef.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: "Chef", schema: chefSchema}])],
  controllers: [ChefController],
  providers: [ChefService],
})
export class ChefModule {}
