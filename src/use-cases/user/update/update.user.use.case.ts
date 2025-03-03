import { User } from '@/entities/user.entity';
import { IUserRepository } from '@/repositories/user.interface.repository';

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(id: number, password: string): Promise<User | undefined> {
    return this.userRepository.update(id, password);
  }
}
