import { Post } from '@/entities/post.entity';
import { IPostRepository } from '@/repositories/post.interface.repository';

export class CreatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  handler(post: Post): Promise<Post | undefined> {
    return this.postRepository.create(post);
  }
}
