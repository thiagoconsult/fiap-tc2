import { UserRepository } from '@/repositories/user.repository';
import { UpdateUserUseCase } from './update.user.use.case';

export const updateUserFactory = () => {
  const userRepository = new UserRepository();
  const updateUserUseCase = new UpdateUserUseCase(userRepository);
  return updateUserUseCase;
};
