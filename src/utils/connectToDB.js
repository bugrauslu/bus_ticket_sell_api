import mongoose from "mongoose";
import config from "config";
import logger from "./logger.js";
let count = 0;

const connectToDb = async () => {
	logger.info("MongoDB connection with retry");
	await mongoose
		.connect(
			`mongodb+srv://${config.get("dbConfig.name")}:${config.get(
				"dbConfig.password"
			)}@cluster0.coyti.mongodb.net/busTicket?retryWrites=true&w=majority`
		)
		.then(() => {
			logger.info("MongoDB is connected");
		})
		.catch((err) => {
			logger.error(
				"MongoDB connection unsuccessful, retry after 5 seconds. ",
				++count
			);
			setTimeout(connectToDb, 5000);
		});
};

export default connectToDb;
