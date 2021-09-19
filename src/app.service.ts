import { ConflictException, Injectable } from "@nestjs/common";
import { people, posts } from "./app.data";
import { Person, PostType } from "./app.types";

@Injectable()
export class PeopleService {
  get(id: number): Person {
    return people.find((p) => p.id === id);
  }

  list(): Person[] {
    return people;
  }

  delete(id: number) {
    const index = people.findIndex((p) => p.id === id);
    if (index === -1) return false;
    people.splice(index, index);
    return true;
  }

  create(person: Person) {
    const duplicate = people.find((p) => p.id === person.id);
    if (duplicate) throw new ConflictException();
    people.push(person);
  }

  update(id: number, name: string) {
    const target = people.find((p) => p.id === id);
    if (target === undefined) return undefined;
    target.name = name;
    return target;
  }
}

@Injectable()
export class PostService {
  get(id: number): PostType {
    return posts.find((p) => p.id === id);
  }

  list(): PostType[] {
    return posts;
  }

  delete(id: number) {
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return false;
    posts.splice(index, index);
    return true;
  }

  create(post: PostType) {
    const duplicate = posts.find((p) => p.id === post.id);
    if (duplicate) throw new ConflictException();
    posts.push(post);
  }

  update(id: number, title: string, content: string, author: number) {
    const target = posts.find((p) => p.id === id);
    if (target === undefined) return undefined;
    target.title = title ?? target.title;
    target.content = content ?? target.content;
    target.author = author ?? target.author;
    return target;
  }
}
