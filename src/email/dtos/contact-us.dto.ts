import { IsEmail, IsNotEmpty } from 'class-validator';

export class ContactUsDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
