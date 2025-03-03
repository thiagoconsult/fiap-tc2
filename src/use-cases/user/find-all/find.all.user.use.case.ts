import { User } from '@/entities/user.entity';
import { IUserRepository } from '@/repositories/user.interface.repository';

export class FindAllUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  handler(page: number, limit: number): Promise<User[] | undefined> {
    return this.userRepository.findAll(page, limit);
  }
}
