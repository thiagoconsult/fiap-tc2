import { Pool, PoolClient, PoolConfig } from 'pg';
import { env } from './envSchema';

const poolConfig: PoolConfig = {
  host: env.POSTGRES_HOST,
  port: env.POSTGRES_PORT,
  database: env.POSTGRES_DATABASE,
  user: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
};

class Database {
  #pool: Pool;
  #poolClient: PoolClient | undefined;

  constructor() {
    this.#pool = new Pool(poolConfig);
    this.#connect();
  }

  async #connect() {
    try {
      this.#poolClient = await this.#pool.connect();
      console.info(`Database connected`);
    } catch (error) {
      console.error(`Error connecting database, ${error}`);
      throw new Error(`Error connecting database, ${error}`);
    }
  }

  get Instance() {
    return this.#poolClient;
  }
}

export const db = new Database();
