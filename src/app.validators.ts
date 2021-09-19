import { IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";

export class IdValidator {
  @IsNumberString()
  id: string;
}

export class NameValidator {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class PersonValidator extends NameValidator {
  @IsNumber()
  id: number;
}

export class PostValidator {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  author: number;
}

export class UpdatePostValidator {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNumber()
  author: number;
}
