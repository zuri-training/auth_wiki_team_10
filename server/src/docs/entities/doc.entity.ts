import { User } from 'src/auth/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('docs')
export class Doc {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  description: string;

  @CreateDateColumn()
  public createdAt: Date;

  @Column(() => User)
  author: User;

  @Column(() => Block)
  blocks: Block[];

  @Column(() => Comment)
  comments: Comment[];

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  disLikes: number;

  @Column({ default: ' ' })
  downloadLinkPython: string;

  @Column({ default: ' ' })
  downloadLinkNode: string;

  @Column({ default: ' ' })
  downloadLinkPhp: string;

  constructor(
    title: string,
    description: string,
    author: User,
    blocks: Block[],
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.blocks = blocks;
    this.downloadLinkPython =
      'https://drive.google.com/file/d/1Nqq7ZX7XeSyJhlkBEhv710aqK4gvlhDF/view?usp=sharing';
    this.downloadLinkPhp =
      'https://drive.google.com/file/d/1Nqq7ZX7XeSyJhlkBEhv710aqK4gvlhDF/view?usp=sharing';
    this.downloadLinkNode =
      'https://drive.google.com/file/d/1Nqq7ZX7XeSyJhlkBEhv710aqK4gvlhDF/view?usp=sharing';
  }
}

@Entity()
export class Block {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  type: string;

  @Column({ default: '' })
  content: string;
}
