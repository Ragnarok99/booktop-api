import { Elysia } from "elysia";
import cors from "@elysiajs/cors";

import booksRoutes from "@/routes/books.route";

const app = new Elysia();

app.use(cors());

app.group("/api/v1", (app) => app.use(booksRoutes));

app.listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
