import argon2 from "argon2";

import { generateToken, passwordsMatch } from "../helpers/authTools.js";
import authRepository from "./authRepository.js";

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await authRepository.readOneByEmail(email);

		if (!user) {
			res.status(401).json({ message: "Invalid email or password" });
			return;
		}

		const isPasswordValid = await passwordsMatch(user.password, password);

		if (!isPasswordValid) {
			res.status(401).json({ message: "Invalid email or password" });
			return;
		}

		const token = generateToken({ user });

		res
			.cookie("token", token, {
				httpOnly: true,
				sameSite: "strict",
				maxAge: 1000 * 60 * 60,
			})
			.status(200)
			.json({ message: "Connexion réussie", userId: user.id });
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({ message: "An unexpected error occurred" });
		return;
	}
};

const findCurrentUser = async (req, res) => {
	try {
		const id = Number.parseInt(req.params.id);
		if (!id) {
			throw new Error("id manquant!!!!");
		}
		const user = await authRepository.readOneById(id);

		res.status(200).json(user);
	} catch (error) {
		console.error(error, { message: "ça marche po" });
	}
};

export default { login, findCurrentUser };
