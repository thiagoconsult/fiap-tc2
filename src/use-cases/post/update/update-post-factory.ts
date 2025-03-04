import { PostRepository } from '@/repositories/post.repository';
import { UpdatePostUseCase } from './update.post.use.case';

export const updatePostFactory = () => {
  const postRepository = new PostRepository();
  const updatePostUseCase = new UpdatePostUseCase(postRepository);
  return updatePostUseCase;
};
