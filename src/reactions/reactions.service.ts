import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { DocsService } from 'src/docs/docs.service';
import { Doc } from 'src/docs/entities/doc.entity';
import { MongoRepository, ObjectID } from 'typeorm';
import { Reaction } from './entities/reaction.entity';

@Injectable()
export class ReactionsService {
  constructor(
    @Inject(forwardRef(() => DocsService))
    private docService: DocsService,
    @InjectRepository(Reaction)
    private repository: MongoRepository<Reaction>,
  ) {}

  async createReaction(docId: ObjectID, user: User, isLike: boolean) {
    const doc = await this.docService.getDoc(docId);
    delete user.email;
    delete user.createdAt;
    const reaction = new Reaction(isLike, doc.id.toString(), user);
    await this.repository.save(reaction);
    return;
  }

  async getAllReactionsByDoc(doc: Doc): Promise<Reaction[]> {
    return this.repository.find({ where: { docId: doc.id.toString() } });
  }

  async deleteReactionById(id: ObjectID, user: User) {
    const reaction = await this.repository.findOneBy(id);
    if (!reaction) {
      throw new HttpException('Reaction not found', HttpStatus.NOT_FOUND);
    }
    if (reaction.author.name != user.name) {
      throw new HttpException(
        'You are not the author of this reaction',
        HttpStatus.FORBIDDEN,
      );
    }
    await this.repository.delete(reaction.id);
    return;
  }

  async countReaction(isLike: boolean) {
    return this.repository.count({ isLike });
  }

  async deleteReaction(id: ObjectID) {
    return this.repository.delete(id);
  }
}
