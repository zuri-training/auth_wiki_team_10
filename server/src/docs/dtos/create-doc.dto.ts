import { IsArray, IsNotEmpty } from 'class-validator';
import { Block } from '../entities/doc.entity';

export class CreateDocDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsArray()
  blocks: [Block];
}
