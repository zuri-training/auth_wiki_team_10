import {
  Body,
  Controller,
  Delete,
  Param,
  ParseBoolPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ObjectID } from 'typeorm';
import { ReactionsService } from './reactions.service';

@Controller('reactions')
@UseGuards(AuthGuard())
export class ReactionsController {
  constructor(private reactionService: ReactionsService) {}

  @Post('')
  async createReaction(
    @Body('docId', ValidationPipe) docId: ObjectID,
    @Body('isLike', ParseBoolPipe) isLike: boolean,
    @GetUser() user: User,
  ) {
    return this.reactionService.createReaction(docId, user, isLike);
  }

  @Delete('/:id/delete')
  async deleteComment(
    @Param('id', ValidationPipe) id: ObjectID,
    @GetUser() user: User,
  ) {
    return this.reactionService.deleteReactionById(id, user);
  }
}
