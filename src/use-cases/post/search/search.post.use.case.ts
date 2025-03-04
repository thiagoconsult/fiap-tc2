import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class SearchPostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(term: string): Promise<(Post & Teacher)[] | undefined> {
    return this.postRepository.search(term);
  }
}
