import { client } from "@/clients/google-books";
import Elysia from "elysia";

const booksRoutes = (app: Elysia) => {
  return app.group("/books", (app) =>
    app.get("/", async ({ query: { q = "popular books", ...rest } = {} }) => {
      const response = await client.get("/v1/volumes", {
        params: { q, ...rest },
      });

      return { data: response.data };
    })
  );
};

export default booksRoutes;
