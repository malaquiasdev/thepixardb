import { version } from "../../../package.json";

export const swaggerConfig = {
  routePrefix: "/",
  exposeRoute: false,
  swagger: {
    info: {
      title: "ThePixarDB",
      description: ``,
      version: version,
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost:8080",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "languages" }, { name: "movies" }],
  },
};
