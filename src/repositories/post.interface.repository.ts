import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';

export interface IPostRepository {
  findAll(page: number, limit: number): Promise<(Post & Teacher)[] | undefined>;
  findById(id: string): Promise<Post | undefined>;
  update(id: string, post: Partial<Post>): Promise<Post | undefined>;
  remove(id: string): Promise<Post | undefined>;
  search(term: string): Promise<(Post & Teacher)[] | undefined>;
  create(post: Post): Promise<Post | undefined>;
}
