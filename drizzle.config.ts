import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: '.env' })

export default {
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config
