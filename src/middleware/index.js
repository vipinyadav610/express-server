import swagger from "swagger-express";
export default (app, config) => {
    app.use(
        swagger.init(app, {
          apiVersion: "1.0",
          swaggerVersion: "1.0",
          defaultApiKey:"hello",
          basePath: "http://localhost:5000",
          swaggerURL: "/swagger",
          swaggerJSON: "/api-docs.json",
          swaggerUI: "./src/swagger/",
          apis: ["./src/api/user.js"]
        })
      );
};
