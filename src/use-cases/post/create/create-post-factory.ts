import { PostRepository } from '@/repositories/post.repository';
import { CreatePostUseCase } from './create.post.use.case';

export const createPostFactory = () => {
  const postRepository = new PostRepository();
  const createPostUseCase = new CreatePostUseCase(postRepository);
  return createPostUseCase;
};
