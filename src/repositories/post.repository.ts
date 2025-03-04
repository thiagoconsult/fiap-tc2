import { Post } from '@/entities/post.entity';
import { Teacher } from '@/entities/teacher.entity';
import { IPostRepository } from './post.interface.repository';
import { db } from '@/config/postgres';

export class PostRepository implements IPostRepository {
  async findAll(
    page: number,
    limit: number,
  ): Promise<(Post & Teacher)[] | undefined> {
    const offset = (page - 1) * limit;

    const result = await db.Instance?.query<Post & Teacher>(
      `
      SELECT post.id, post.title, post.content, teacher.name as teacher_name, post.created_at, post.updated_at
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      LIMIT $1 OFFSET $2
      `,
      [limit, offset],
    );

    return result?.rows;
  }

  async findById(id: string): Promise<(Post & Teacher) | undefined> {
    const result = await db.Instance?.query<Post & Teacher>(
      `
      SELECT post.id, post.title, post.content, teacher.name as teacher_name, post.created_at, post.updated_at
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      WHERE post.id = $1
      `,
      [id],
    );

    return result?.rows[0];
  }

  async update(
    id: string,
    { title, content }: Partial<Post>,
  ): Promise<Post | undefined> {
    const result = await db.Instance?.query<Post>(
      `
      UPDATE post
      SET title = COALESCE($2, title), content = COALESCE($3, content), updated_at = CURRENT_DATE
      WHERE id = $1
      RETURNING *
      `,
      [id, title, content],
    );

    return result?.rows[0];
  }

  async remove(id: string): Promise<Post | undefined> {
    const result = await db.Instance?.query<Post>(
      `
      DELETE FROM post
      WHERE id = $1
      RETURNING id
      `,
      [id],
    );

    return result?.rows[0];
  }

  async search(term: string): Promise<(Post & Teacher)[] | undefined> {
    const result = await db.Instance?.query<Post & Teacher>(
      `
      SELECT post.id, post.title, post.content, teacher.name as teacher_name, post.created_at, post.updated_at
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      WHERE post.title ILIKE $1 OR post.content ILIKE $1
      `,
      [`%${term}%`],
    );
    return result?.rows;
  }

  async create({
    teacher_id,
    title,
    content,
  }: Post): Promise<Post | undefined> {
    const result = await db.Instance?.query<Post>(
      `
        INSERT INTO post (teacher_id, title, content)
        VALUES ($1, $2, $3)
        RETURNING id, title, created_at
        `,
      [teacher_id, title, content],
    );

    return result?.rows[0];
  }
}
