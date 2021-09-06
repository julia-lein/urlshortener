import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;
	const passBcrypt = bcrypt.hashSync("john", SALT_ROUNDS);

console.log(passBcrypt);