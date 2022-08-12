import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from 'typeorm';

@Entity('resetPassword')
export class ResetPassword {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: '' })
  token: string;

  @Column({ default: '' })
  email: string;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(token: string, email: string) {
    this.token = token;
    this.email = email;
  }
}
