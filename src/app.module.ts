import { Module } from '@nestjs/common';
import { PeopleController, PostController } from "./app.controller";
import { PeopleService, PostService } from "./app.service";

@Module({
  imports: [],
  controllers: [PeopleController, PostController],
  providers: [PeopleService, PostService],
})
export class AppModule {}
