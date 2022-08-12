import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ContactUsDto } from './dtos/contact-us.dto';
import { NewsletterDto } from './dtos/newsletter.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post('/contact-us')
  async contactUs(@Body(ValidationPipe) body: ContactUsDto) {
    return this.emailService.contactUs(body);
  }

  @Post('/newsletter')
  async newsletter(@Body(ValidationPipe) dto: NewsletterDto) {
    return this.emailService.newsletter(dto.email);
  }
}
