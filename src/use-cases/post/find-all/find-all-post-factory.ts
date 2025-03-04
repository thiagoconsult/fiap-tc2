import { PostRepository } from '@/repositories/post.repository';
import { FindAllPostUseCase } from './find.all.post.use.case';

export const findAllPostFactory = () => {
  const postRepository = new PostRepository();
  const findAllPostUseCase = new FindAllPostUseCase(postRepository);
  return findAllPostUseCase;
};
