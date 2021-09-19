import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from './app.controller';
import { PeopleService } from './app.service';

describe('AppController', () => {
  let appController: PeopleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [PeopleService],
    }).compile();
  });
});
