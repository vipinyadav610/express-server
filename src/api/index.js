import { Router } from "express";
import user from "./user";
import auth from "../middleware/checkAuth";
export default ({ config, db }) => {
  let api = Router();
  api.get("/user", auth({ config, db }), user.getAllUser);

  return api;
};
