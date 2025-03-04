import { PostRepository } from '@/repositories/post.repository';
import { SearchPostUseCase } from './search.post.use.case';

export const searchPostFactory = () => {
  const postRepository = new PostRepository();
  const searchPostUseCase = new SearchPostUseCase(postRepository);
  return searchPostUseCase;
};
