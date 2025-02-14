import argon2 from "argon2";
import "dotenv/config";
import jwt from "jsonwebtoken";

const passwordsMatch = async (hash, password) => {
	return await argon2.verify(hash, password);
};

const generateToken = ({ user }) => {
	return jwt.sign(
		{ userId: user.id, role: user.role },
		process.env.APP_SECRET,
		{
			expiresIn: "1h",
		},
	);
};

export { generateToken, passwordsMatch };

