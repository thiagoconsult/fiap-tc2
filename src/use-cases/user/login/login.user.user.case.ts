import { User } from '@/entities/user.entity';
import { IUserRepository } from '@/repositories/user.interface.repository';

export class LoginUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(username: string): Promise<User | undefined> {
    return this.userRepository.login(username);
  }
}
