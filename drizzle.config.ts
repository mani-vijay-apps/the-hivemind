import dotenv from "dotenv";
import {defineConfig} from "drizzle-kit";

dotenv.config({path: ".env.local"});

export default defineConfig({
    schema: "./src/db/schema/*",
    out: "./dist/db/migrations",
    dialect: "postgresql",
    dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});