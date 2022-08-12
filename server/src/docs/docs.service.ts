import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CommentsService } from 'src/comments/comments.service';
import { ReactionsService } from 'src/reactions/reactions.service';
import { MongoRepository, ObjectID } from 'typeorm';
import { CreateDocDto } from './dtos/create-doc.dto';
import { EditDocDto } from './dtos/edit-doc.dto';
import { Doc } from './entities/doc.entity';

@Injectable()
export class DocsService {
  constructor(
    @Inject(forwardRef(() => CommentsService))
    private commentService: CommentsService,
    @Inject(forwardRef(() => ReactionsService))
    private reactionService: ReactionsService,
    @InjectRepository(Doc)
    private repository: MongoRepository<Doc>,
  ) {}

  async createDoc(dto: CreateDocDto, user: User): Promise<Doc> {
    let doc = new Doc(
      dto.title,
      dto.description,
      user,
      dto.blocks,
      dto.downloadLink,
    );
    doc = await this.repository.save(doc);
    return doc;
  }

  async getAllDocs(): Promise<Doc[]> {
    const docs = await this.repository.find();
    return docs;
  }

  async getDoc(id: ObjectID): Promise<Doc> {
    let doc: Doc;
    try {
      doc = await this.repository.findOneBy(id);
    } catch (error) {
      throw new HttpException('Doc not found', HttpStatus.NOT_FOUND);
    }
    if (!doc) {
      throw new HttpException('Doc not found', HttpStatus.NOT_FOUND);
    }

    // fetch comments
    doc.comments = await this.commentService.getAllCommentsByDoc(doc);
    doc.likes = await this.reactionService.countReaction(true);
    doc.disLikes = await this.reactionService.countReaction(false);
    return doc;
  }

  async editDoc(dto: EditDocDto, id: ObjectID, user: User): Promise<Doc> {
    const doc = await this.getDoc(id);
    if (doc.author.name != user.name) {
      throw new HttpException(
        'You are not the author of this doc',
        HttpStatus.FORBIDDEN,
      );
    }
    doc.title = dto.title;
    doc.description = dto.description;
    doc.blocks = dto.blocks;
    delete doc.author.password;
    await this.repository.update(id, doc);
    return await this.getDoc(id);
  }

  async deleteDoc(id: ObjectID, user: User): Promise<void> {
    const doc = await this.getDoc(id);
    if (doc.author.name != user.name) {
      throw new HttpException(
        'You are not the author of this doc',
        HttpStatus.FORBIDDEN,
      );
    }

    // delete all comment related to the doc
    const comments = await this.commentService.getAllCommentsByDoc(doc);
    let i = comments.length;
    while (i > 0) {
      await this.commentService.deleteComment(comments[i - 1].id);
      i--;
    }

    // delete all reactions related to the doc
    const reactions = await this.reactionService.getAllReactionsByDoc(doc);
    let j = reactions.length;
    while (j > 0) {
      await this.reactionService.deleteReaction(reactions[j - 1].id);
      j--;
    }

    // delete doc
    await this.repository.delete(id);
    return;
  }
}
