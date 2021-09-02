import mongoose from 'mongoose';

const mongoDbURL = "mongodb+srv://Julia:vasilisa1@cluster0.hoqzk.mongodb.net/urlshortener?retryWrites=true&w=majority";

mongoose.connect(
	mongoDbURL,
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
