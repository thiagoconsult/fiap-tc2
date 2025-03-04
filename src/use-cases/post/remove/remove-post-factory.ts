import { PostRepository } from '@/repositories/post.repository';
import { RemovePostUseCase } from './remove.post.use.case';

export const removePostFactory = () => {
  const postRepository = new PostRepository();
  const removePostUseCase = new RemovePostUseCase(postRepository);
  return removePostUseCase;
};
