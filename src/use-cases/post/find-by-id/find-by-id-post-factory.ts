import { PostRepository } from '@/repositories/post.repository';
import { FindByIdPostUseCase } from './find.by.id.post.use.case';

export const findByIdPostFactory = () => {
  const postRepository = new PostRepository();
  const findByIdPostUseCase = new FindByIdPostUseCase(postRepository);
  return findByIdPostUseCase;
};
