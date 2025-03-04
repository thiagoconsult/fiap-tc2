import { Teacher } from '@/entities/teacher.entity';
import { ITeacherRepository } from '@/repositories/teacher.interface.repository';

export class CreateTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(teacher: Teacher): Promise<Teacher | undefined> {
    return this.teacherRepository.create(teacher);
  }
}
