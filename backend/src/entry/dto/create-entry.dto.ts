import { IsNotEmpty, Length, Matches } from 'class-validator';

export class CreateEntryDto {
  @IsNotEmpty()
  @Length(1, 100)
  title: string;

  @IsNotEmpty()
  @Length(1, 100)
  author: string;

  @IsNotEmpty()
  @Length(1, 1000)
  content: string;
}
