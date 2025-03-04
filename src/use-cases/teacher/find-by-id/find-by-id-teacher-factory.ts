import { TeacherRepository } from '@/repositories/teacher.repository';
import { FindByIdTeacherUseCase } from './find.by.id.teacher.use.case';

export const findByIdTeacherFactory = () => {
  const teacherRepository = new TeacherRepository();
  const findByIdTeacherUseCase = new FindByIdTeacherUseCase(teacherRepository);
  return findByIdTeacherUseCase;
};
