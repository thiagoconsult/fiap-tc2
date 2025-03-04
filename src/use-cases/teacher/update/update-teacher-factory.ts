import { TeacherRepository } from '@/repositories/teacher.repository';
import { UpdateTeacherUseCase } from './update.teacher.use.case';

export const updateTeacherFactory = () => {
  const teacherRepository = new TeacherRepository();
  const updateTeacherUseCase = new UpdateTeacherUseCase(teacherRepository);
  return updateTeacherUseCase;
};
