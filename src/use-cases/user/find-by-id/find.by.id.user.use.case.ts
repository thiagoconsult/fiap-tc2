import { User } from '@/entities/user.entity';
import { IUserRepository } from '@/repositories/user.interface.repository';

export class FindByIdUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }
}
