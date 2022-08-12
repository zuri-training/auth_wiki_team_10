import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/auth/user.entity';
import { DocsService } from 'src/docs/docs.service';
import { Doc } from 'src/docs/entities/doc.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @Inject(forwardRef(() => DocsService))
    private docService: DocsService,
    @InjectRepository(Comment)
    private repository: MongoRepository<Comment>,
    private authService: AuthService,
  ) {}

  async createComment(docId: ObjectID, user: User, message: string) {
    const doc = await this.docService.getDoc(docId);
    delete user.createdAt;
    const comment = new Comment(message, doc.id.toString(), user);
    await this.repository.save(comment);
    return;
  }

  async getAllCommentsByDoc(doc: Doc): Promise<Comment[]> {
    return this.repository.find({ where: { docId: doc.id.toString() } });
  }

  async deleteCommentById(id: ObjectID, user: User) {
    const comment = await this.repository.findOneBy(id);
    if (!comment) {
      throw new HttpException('Comment not found', HttpStatus.NOT_FOUND);
    }
    if (comment.author.name != user.name) {
      throw new HttpException(
        'You are not the author of this comment',
        HttpStatus.FORBIDDEN,
      );
    }
    await this.repository.delete(comment.id);
    return;
  }

  async deleteComment(id: ObjectID) {
    return this.repository.delete(id);
  }
}
