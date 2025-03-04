import { Teacher } from '@/entities/teacher.entity';
import { User } from '@/entities/user.entity';
import { ITeacherRepository } from './teacher.interface.repository';
import { db } from '@/config/postgres';

export class TeacherRepository implements ITeacherRepository {
  async findAll(
    page: number,
    limit: number,
  ): Promise<(Teacher & User)[] | undefined> {
    const offset = (page - 1) * limit;
    const result = await db.Instance?.query<Teacher & User>(
      `
        SELECT teacher.id as id, teacher.name as name, "user".username as username, teacher.created_at
        FROM teacher
        INNER JOIN "user"
        ON teacher.user_id = "user".id
        LIMIT $1 OFFSET $2
        `,
      [limit, offset],
    );

    return result?.rows;
  }

  async findById(id: number): Promise<(Teacher & User) | undefined> {
    const result = await db.Instance?.query<Teacher & User>(
      `
      SELECT teacher.id as id, teacher.name as name, "user".username as username, teacher.created_at
      FROM teacher
      INNER JOIN "user"
      ON teacher.user_id = "user".id
      WHERE teacher.id = $1
      `,
      [id],
    );

    return result?.rows[0];
  }

  async update(id: number, name: string): Promise<Teacher | undefined> {
    const result = await db.Instance?.query<Teacher>(
      `
      UPDATE teacher
      SET name = COALESCE($2, name), updated_at = CURRENT_DATE
      WHERE id = $1
      RETURNING id, name, created_at, updated_at
      `,
      [id, name],
    );

    return result?.rows[0];
  }

  async remove(id: number): Promise<Teacher | undefined> {
    const result = await db.Instance?.query<Teacher>(
      `
      DELETE FROM teacher
      WHERE id = $1
      RETURNING id
      `,
      [id],
    );

    return result?.rows[0];
  }

  async create({ user_id, name }: Teacher): Promise<Teacher | undefined> {
    const result = await db.Instance?.query<Teacher>(
      `
            INSERT INTO teacher (user_id, name)
            VALUES ($1, $2)
            RETURNING id, name, created_at
            `,
      [user_id, name],
    );

    return result?.rows[0];
  }
}
