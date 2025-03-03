import { UserRepository } from '@/repositories/user.repository';
import { RemoveUserUseCase } from './remove.user.use.case';

export const removeUserFactory = () => {
  const userRepository = new UserRepository();
  const removeUserUseCase = new RemoveUserUseCase(userRepository);
  return removeUserUseCase;
};
