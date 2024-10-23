import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL,
    ssl: true,
  },
});

export { db };
