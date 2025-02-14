import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import projectRoutes from "./projectRoutes.js";

dotenv.config();

const port = process.env.APP_PORT;
const app = express();
if (process.env.CLIENT_URL != null) {
	app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true }));
}
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Bienvenue sur l'API de gestion de projets");
});

app.use("/projects", projectRoutes);

app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	})
	.on("error", (err) => {
		console.error("Error:", err.message);
	});
