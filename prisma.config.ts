import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",

  datasource: {
    // Lokasi database SQLite
    url: "file:./prisma/dev.db",
  },

  migrations: {
    path: "./prisma/migrations",
  },
});
