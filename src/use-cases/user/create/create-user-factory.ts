import { UserRepository } from '@/repositories/user.repository';
import { CreateUserUseCase } from './create.user.use.case';

export function createUserFactory() {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);
  return createUserUseCase;
}
