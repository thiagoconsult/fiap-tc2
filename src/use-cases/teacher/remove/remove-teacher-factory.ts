import { TeacherRepository } from '@/repositories/teacher.repository';
import { RemoveTeacherUseCase } from './remove.teacher.use.case';

export const removeTeacherFactory = () => {
  const teacherRepository = new TeacherRepository();
  const removeTeacherUseCase = new RemoveTeacherUseCase(teacherRepository);
  return removeTeacherUseCase;
};
