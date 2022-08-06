import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from "typeorm";

@Entity("users")
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ default: "" })
  name: string;

  @Column({ default: "" })
  email: string;

  @Column({ default: "" })
  password: string;

  @CreateDateColumn()
  public createdAt: Date;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
