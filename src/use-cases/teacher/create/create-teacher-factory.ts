import { TeacherRepository } from '@/repositories/teacher.repository';
import { CreateTeacherUseCase } from './create.teacher.use.case';

export const createTeacherFactory = () => {
  const teacherRepository = new TeacherRepository();
  const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository);
  return createTeacherUseCase;
};
