import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class FindByIdPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(id: string): Promise<(Post & Teacher) | undefined> {
    return this.postRepository.findById(id);
  }
}
