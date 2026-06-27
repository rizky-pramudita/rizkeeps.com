import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DB_URL

if (!connectionString) {
  throw new Error('DB_URL is not set. Add your Postgres connection string to .env')
}

// Reuse the client across hot-reloads in dev to avoid exhausting connections.
const globalForDb = globalThis as unknown as {
  pgClient?: ReturnType<typeof postgres>
}

const client =
  globalForDb.pgClient ?? postgres(connectionString, { max: 5 })

if (process.env.NODE_ENV !== 'production') {
  globalForDb.pgClient = client
}

export const db = drizzle(client, { schema })
export { schema }
