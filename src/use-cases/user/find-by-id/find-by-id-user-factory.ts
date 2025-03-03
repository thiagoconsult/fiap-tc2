import { UserRepository } from '@/repositories/user.repository';
import { FindByIdUserUseCase } from './find.by.id.user.use.case';

export const findByIdUserFactory = () => {
  const userRepository = new UserRepository();
  const findByIdUserUseCase = new FindByIdUserUseCase(userRepository);
  return findByIdUserUseCase;
};
