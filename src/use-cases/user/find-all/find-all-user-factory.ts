import { UserRepository } from '@/repositories/user.repository';
import { FindAllUserUseCase } from './find.all.user.use.case';

export const findAllUserFactory = () => {
  const userRepository = new UserRepository();
  const findAllUserUseCase = new FindAllUserUseCase(userRepository);
  return findAllUserUseCase;
};
