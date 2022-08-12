import { IsArray, IsNotEmpty } from 'class-validator';
import { ObjectID } from 'typeorm';
import { Block } from '../entities/doc.entity';

export class EditDocDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsArray()
  blocks: [Block];
}
