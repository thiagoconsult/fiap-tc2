import { User } from '@/entities/user.entity';

export interface IUserRepository {
  findAll(page: number, limit: number): Promise<User[] | undefined>;
  findById(id: number): Promise<User | undefined>;
  update(id: number, password: string): Promise<User | undefined>;
  remove(id: number): Promise<User | undefined>;
  create(user: User): Promise<User | undefined>;
  login(username: string): Promise<User | undefined>;
}
