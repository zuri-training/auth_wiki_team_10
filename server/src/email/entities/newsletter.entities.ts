import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('newsletter')
export class Newsletter {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  email: string;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(email: string) {
    this.email = email;
  }
}
