import { User } from 'src/auth/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('reactions')
export class Reaction {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: true })
  isLike: boolean;

  @Column()
  docId: string;

  @Column(() => User)
  author: User;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(isLike: boolean, docId: string, author: User) {
    this.isLike = isLike;
    (this.docId = docId), (this.author = author);
  }
}
