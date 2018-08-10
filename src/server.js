import express from "express";
import db_connect from "./db-connect/db";
import api from "./api";
import middleware from "./middleware";
import config from "./config.json";
import http from "http";
const { port, host } = config;
const app = express();
middleware(app, config);

db_connect(db => {
  app.use("/api/v1", api({ config, db, app }));
});

const server = http.createServer(app);
server.listen(port, host, () => {
  console.log("Express server listening on %d", port);
});
