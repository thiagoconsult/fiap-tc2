import { Post } from '@/entities/post.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class UpdatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(id: string, post: Partial<Post>): Promise<Post | undefined> {
    return this.postRepository.update(id, post);
  }
}
