import { User } from 'src/auth/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('comments')
export class Comment {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  message: string;

  @Column()
  docId: string;

  @Column(() => User)
  author: User;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(message: string, docId: string, author: User) {
    this.message = message;
    (this.docId = docId), (this.author = author);
  }
}
