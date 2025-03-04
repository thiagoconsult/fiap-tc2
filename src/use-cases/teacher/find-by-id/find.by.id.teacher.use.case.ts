import { Teacher } from '@/entities/teacher.entity';
import { User } from '@/entities/user.entity';
import { ITeacherRepository } from '@/repositories/teacher.interface.repository';

export class FindByIdTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(id: number): Promise<(Teacher & User) | undefined> {
    return this.teacherRepository.findById(id);
  }
}
