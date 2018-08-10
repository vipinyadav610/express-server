import { Router } from "express";
import user from "./user";
import auth from "../middleware/checkAuth";

export default ({ config, db }) => {
  let api = Router();
  api.use("/user", auth(), user({ config, db }));

  return api;
};
