import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('contacts')
export class Contact {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  message: string;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(name: string, email: string, message: string) {
    this.name = name;
    this.email = email;
    this.message = message;
  }
}
