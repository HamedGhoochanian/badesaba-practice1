import {
  Body,
  Controller,
  Delete, Get, NotFoundException,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { PeopleService, PostService } from "./app.service";
import { Person, PostType } from "./app.types";
import { IdValidator, NameValidator, PersonValidator, PostValidator, UpdatePostValidator } from "./app.validators";

@Controller("people")
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {
  }

  @Get(":id")
  getPerson(@Param() params: IdValidator): Person {
    const person = this.peopleService.get(parseInt(params.id));
    if (person === undefined)
      throw new NotFoundException();
    return person;
  }

  @Get()
  getPeople(): Person[] {
    return this.peopleService.list();
  }

  @Delete(":id")
  deletePerson(@Param() params: IdValidator): any {
    const result = this.peopleService.delete(parseInt(params.id));
    if (result === false) throw new NotFoundException();
    return { message: "Resource Deleted." };
  }

  @Post()
  addPerson(@Body() body: PersonValidator): any {
    const newPerson: Person = {
      id: body.id,
      name: body.name
    };
    this.peopleService.create(newPerson);
    return { message: "Resource created." };
  }

  @Put(":id")
  updatePerson(@Param() params: IdValidator, @Body() body: NameValidator): any {
    const result = this.peopleService.update(parseInt(params.id), body.name);
    if (result === undefined) throw new NotFoundException();
    return result;
  }
}

@Controller("posts")
export class PostController {
  constructor(private readonly postService: PostService) {
  }


  @Get(":id")
  getPerson(@Param() params: IdValidator): PostType {
    const post = this.postService.get(parseInt(params.id));
    if (post === undefined)
      throw new NotFoundException();
    return post;
  }

  @Get()
  getPeople(): PostType[] {
    return this.postService.list();
  }

  @Delete(":id")
  deletePerson(@Param() params: IdValidator): any {
    const result = this.postService.delete(parseInt(params.id));
    if (result === false) throw new NotFoundException();
    return { message: "Resource Deleted." };
  }

  @Post()
  addPerson(@Body() body: PostValidator): any {
    const newPost: PostType = {
      id: body.id,
      title: body.title,
      content: body.content,
      dateCreated: new Date(),
      author: body.author
    };
    this.postService.create(newPost);
    return { message: "Resource created." };
  }

  @Put(":id")
  updatePerson(@Param() params: IdValidator, @Body() body: UpdatePostValidator): any {
    const result = this.postService.update(parseInt(params.id), body.title, body.content, body.author);
    if (result === undefined) throw new NotFoundException();
    return result;
  }
}
