import { User } from '@/entities/user.entity';
import { IUserRepository } from '@/repositories/user.interface.repository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(user: User): Promise<User | undefined> {
    return this.userRepository.create(user);
  }
}
