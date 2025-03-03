import { User } from '@/entities/user.entity';
import { IUserRepository } from './user.interface.repository';
import { db } from '@/config/postgres';

export class UserRepository implements IUserRepository {
  async findAll(page: number, limit: number): Promise<User[] | undefined> {
    const offset = (page - 1) * limit;

    const result = await db.Instance?.query<User>(
      `
      SELECT id, username, created_at, updated_at
      FROM "user"
      LIMIT $1 OFFSET $2
      `,
      [limit, offset],
    );

    return result?.rows;
  }

  async findById(id: number): Promise<User | undefined> {
    const result = await db.Instance?.query(
      `
      SELECT id, username, created_at, updated_at
      FROM "user"
      WHERE id = $1
      `,
      [id],
    );

    return result?.rows[0];
  }

  async update(id: number, password: string): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      UPDATE "user" 
      SET password = COALESCE($2, password), updated_at = CURRENT_DATE
      WHERE id = $1
      RETURNING id, username, created_at, updated_at
      `,
      [id, password],
    );

    return result?.rows[0];
  }

  async remove(id: number): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      DELETE FROM "user"
      WHERE id = $1
      RETURNING id
      `,
      [id],
    );

    return result?.rows[0];
  }

  async create({ username, password }: User): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      INSERT INTO "user" (username, password)
      VALUES ($1, $2)
      RETURNING id, username, created_at
      `,
      [username, password],
    );

    return result?.rows[0];
  }

  async login(username: string): Promise<User | undefined> {
    const result = await db.Instance?.query<User>(
      `
      SELECT * FROM "user"
      WHERE username = $1
      `,
      [username],
    );

    return result?.rows[0];
  }
}
