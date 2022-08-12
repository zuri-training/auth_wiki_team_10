import { forwardRef, Module } from '@nestjs/common';
import { DocsService } from './docs.service';
import { DocsController } from './docs.controller';
import { Doc } from './entities/doc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CommentsModule } from 'src/comments/comments.module';
import { ReactionsModule } from 'src/reactions/reactions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doc]),
    AuthModule,
    forwardRef(() => CommentsModule),
    forwardRef(() => ReactionsModule),
  ],
  providers: [DocsService],
  controllers: [DocsController],
  exports: [DocsService],
})
export class DocsModule {}
