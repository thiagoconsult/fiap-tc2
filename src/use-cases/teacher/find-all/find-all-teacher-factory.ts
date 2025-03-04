import { TeacherRepository } from '@/repositories/teacher.repository';
import { FindAllTeacherUseCase } from './find.all.teacher.use.case';

export const findAllTeacherFactory = () => {
  const teacherRepository = new TeacherRepository();
  const findAllTeacherUseCase = new FindAllTeacherUseCase(teacherRepository);
  return findAllTeacherUseCase;
};
