import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ObjectID } from 'typeorm';
import { DocsService } from './docs.service';
import { CreateDocDto } from './dtos/create-doc.dto';
import { EditDocDto } from './dtos/edit-doc.dto';

@Controller('docs')
export class DocsController {
  constructor(private docService: DocsService) {}

  @UseGuards(AuthGuard())
  @Post('')
  async createDoc(
    @Body(ValidationPipe) body: CreateDocDto,
    @GetUser() user: User,
  ) {
    return this.docService.createDoc(body, user);
  }

  @Get('/')
  async getAllDocs() {
    return this.docService.getAllDocs();
  }

  @UseGuards(AuthGuard())
  @Get('/:id')
  async getDoc(@Param('id', ValidationPipe) id: ObjectID) {
    return this.docService.getDoc(id);
  }

  @UseGuards(AuthGuard())
  @Put('/:id/edit')
  async editDoc(
    @Body(ValidationPipe) body: EditDocDto,
    @Param('id', ValidationPipe) id: ObjectID,
    @GetUser() user: User,
  ) {
    return this.docService.editDoc(body, id, user);
  }

  @UseGuards(AuthGuard())
  @Delete('/:id/delete')
  async deleteDoc(
    @Param('id', ValidationPipe) id: ObjectID,
    @GetUser() user: User,
  ) {
    return this.docService.deleteDoc(id, user);
  }

  // @Post('/:id/like')
  // async likeOrDislikeDoc(
  //   @Param('id', ValidationPipe) id: ObjectID,
  //   @Body('isLike', ParseBoolPipe) isLike: boolean,
  // ) {
  //   return this.docService.likeOrDislikeDoc(id, isLike);
  // }
}
