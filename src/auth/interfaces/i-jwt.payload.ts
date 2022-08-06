import { ObjectID } from 'typeorm';

export interface IJwtPayload {
  id: ObjectID;
  name: string;
  email: string;
}
