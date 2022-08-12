import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { google } from 'googleapis';
import { CreateAccessToken } from './create-access-token';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact-us.entities';
import { Newsletter } from './entities/newsletter.entities';

const CLIENT_ID =
  '85540443280-dsu4bps4jnfpa6q7j4e4mn4vul2fnhjr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//04x8Q_vKQbDJbCgYIARAAGAQSNwF-L9IrVEcc6WwJZ9j6a2pwakfrHfOo8ZA03aArBkNU7PtRzu-BRqTXvyQ3ZrXo_AOssdQUjTg';

export const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
export const ACCESS_TOKEN = new CreateAccessToken().generateAccessToken();

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'authwikiteam10@gmail.com',
          clientId: process.env.CLIENT_ID || CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET || CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN || REFRESH_TOKEN,
          accessToken: ACCESS_TOKEN,
        },
      },
    }),
    TypeOrmModule.forFeature([Contact, Newsletter]),
  ],
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
