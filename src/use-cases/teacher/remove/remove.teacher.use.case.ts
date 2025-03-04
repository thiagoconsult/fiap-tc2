import { Teacher } from '@/entities/teacher.entity';
import { ITeacherRepository } from '@/repositories/teacher.interface.repository';

export class RemoveTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(id: number): Promise<Teacher | undefined> {
    return this.teacherRepository.remove(id);
  }
}
