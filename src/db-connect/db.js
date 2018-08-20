import { Client } from "pg";

export default async cb => {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "dummy-db",
    password: "vipin",
    port: 5432
  });
  cb(client);
};
