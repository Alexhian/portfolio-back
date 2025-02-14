import { Router } from "express";
import authActions from "./auth/authActions.js";
import {
	createProject,
	deleteProject,
	getProjects,
	updateProject,
} from "./controllers/projectController.js";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

router.post("/auth/login", authActions.login);
router.get("/auth/find/:id", authActions.findCurrentUser);

export default router;
