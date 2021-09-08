import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
}, { versionKey: false });


const User = mongoose.model("User", UserSchema);


async function loginByEmail(email, password) {
	const user = await User.find({email: email});

	const isAuthenticated = bcrypt.compareSync(password, user[0].password);
	if (isAuthenticated) {
        return user[0];
	} else {
		throw new Error("authentication failed");
	}
    
	
}

export default {
	loginByEmail
};