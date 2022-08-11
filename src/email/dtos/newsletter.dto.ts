import { IsEmail, IsNotEmpty } from 'class-validator';

export class NewsletterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
