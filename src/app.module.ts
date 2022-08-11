import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { DocsModule } from './docs/docs.module';
import { CommentsModule } from './comments/comments.module';
import { ReactionsModule } from './reactions/reactions.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      url: 'mongodb+srv://auth_wiki_team10:auth_wiki_team10@cluster0.96g0xco.mongodb.net/authWikiNest?retryWrites=true&w=majority',
      // host: 'localhost',
      // port: 27017,
      database: 'authWikiNest',
      useNewUrlParser: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
    }),
    ConfigModule.forRoot({}),
    AuthModule,
    DocsModule,
    CommentsModule,
    ReactionsModule,
    EmailModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
