import { Teacher } from '@/entities/teacher.entity';
import { User } from '@/entities/user.entity';
import { ITeacherRepository } from '@/repositories/teacher.interface.repository';

export class FindAllTeacherUseCase {
  constructor(private readonly teacherRepository: ITeacherRepository) {}

  handler(
    page: number,
    limite: number,
  ): Promise<(Teacher & User)[] | undefined> {
    return this.teacherRepository.findAll(page, limite);
  }
}
