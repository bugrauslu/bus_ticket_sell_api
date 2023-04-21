import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import config from "config";
import logger from "./utils/logger";
import connectToDb from "./utils/connectToDB";

import router from "./routes";

const app = express();

app.use(express.json());
app.use(express.json({ limit: "50mb" }));

app.use("/api", router);

const port = config.get("serverConfig.port");

app.listen(port, () => {
  logger.info(`App started at http://localhost:${port}`);
  connectToDb();
});
