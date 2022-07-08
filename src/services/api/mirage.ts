import { createServer, Model, Response } from "miragejs";

type environmentType = "development" | "testing" | "production";

export function makeServer(environment: environmentType = "testing") {
  const server = createServer<any, any>({
    environment,

    models: {
      data: Model,
    },

    routes() {
      this.namespace = "api";
      this.post("/data", (schema, request) => {
        const showError = Math.round(Math.random() * 10) > 5;

        if (showError) {
          return new Response(
            500,
            {},
            { error: "Not possible to save the data" }
          );
        }

        const { requestBody } = request;
        const data = JSON.parse(requestBody);
        return schema.create("data", data);
      });
    },
  });

  return server;
}
