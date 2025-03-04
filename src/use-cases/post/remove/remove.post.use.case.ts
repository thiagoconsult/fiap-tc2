import { Post } from '@/entities/post.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class RemovePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(id: string): Promise<Post | undefined> {
    return this.postRepository.remove(id);
  }
}
