import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class FindAllPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(
    page: number,
    limit: number,
  ): Promise<(Post & Teacher)[] | undefined> {
    return this.postRepository.findAll(page, limit);
  }
}
