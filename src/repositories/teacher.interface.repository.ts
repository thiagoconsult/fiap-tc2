import { Teacher } from '@/entities/teacher.entity';
import { User } from '@/entities/user.entity';

export interface ITeacherRepository {
  findAll(page: number, limit: number): Promise<(Teacher & User)[] | undefined>;
  findById(id: number): Promise<(Teacher & User) | undefined>;
  update(id: number, name: string): Promise<Teacher | undefined>;
  remove(id: number): Promise<Teacher | undefined>;
  create(teacher: Teacher): Promise<Teacher | undefined>;
}
