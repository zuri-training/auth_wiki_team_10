import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class RefreshToken {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({
    default: '',
  })
  token: string;

  @Column(() => User)
  user: User;

  constructor(token: string, user: User) {
    this.token = token;
    this.user = user;
  }
}
