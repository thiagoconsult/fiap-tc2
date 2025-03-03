import { UserRepository } from '@/repositories/user.repository';
import { LoginUserUseCase } from './login.user.user.case';

export const loginUserFactory = () => {
  const userRepository = new UserRepository();
  const loginUserUseCase = new LoginUserUseCase(userRepository);
  return loginUserUseCase;
};
