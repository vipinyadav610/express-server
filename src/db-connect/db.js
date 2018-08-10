import { Client } from "pg";

export default callback => {
  const client = new Client();
  callback(client);
};
