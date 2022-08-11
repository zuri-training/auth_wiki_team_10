import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ObjectID } from 'typeorm';
import { CommentsService } from './comments.service';

@Controller('comments')
@UseGuards(AuthGuard())
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Post('')
  async createComment(
    @Body('docId', ValidationPipe) docId: ObjectID,
    @Body('message') message: string,
    @GetUser() user: User,
  ) {
    return this.commentService.createComment(docId, user, message);
  }

  @Delete('/:id/delete')
  async deleteComment(
    @Param('id', ValidationPipe) id: ObjectID,
    @GetUser() user: User,
  ) {
    return this.commentService.deleteCommentById(id, user);
  }
}
