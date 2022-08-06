import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'authWikiNest',
      useNewUrlParser: true,
      autoLoadEntities: true,
      useUnifiedTopology: true,
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
    }),
    ConfigModule.forRoot({}),
    AuthModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
