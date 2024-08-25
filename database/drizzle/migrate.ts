import {  drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 });

async function migrator() {
    await migrate(drizzle(migrationClient), {
        migrationsFolder: "./database/drizzle/migrations"
    })

    await migrationClient.end()
}

migrator();