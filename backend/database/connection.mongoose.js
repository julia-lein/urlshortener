import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
	process.env.MONGODB_URI,
	{
		useNewUrlParser: true,
		//useUnifiedTopology: true,
		//useFindAndModify: false,
		//useCreateIndex: true,
		//auth: { authSource: "admin" }
	}
);

const init = function () {
	const db = mongoose.connection;
	db.on("error", console.error);
}

export default { init };
