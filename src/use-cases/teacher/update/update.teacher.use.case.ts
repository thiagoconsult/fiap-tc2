import { Teacher } from '@/entities/teacher.entity';
import { ITeacherRepository } from '@/repositories/teacher.interface.repository';

export class UpdateTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(id: number, name: string): Promise<Teacher | undefined> {
    return this.teacherRepository.update(id, name);
  }
}
