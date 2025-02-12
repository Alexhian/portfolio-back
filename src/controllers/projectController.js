import db from "../../database/db.js";

export async function getProjects(req, res) {
  try {
    const [results] = await db.query("SELECT * FROM projects");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function createProject(req, res) {
  const { title, description } = req.body;
  try {
    const [result] = await db.query("INSERT INTO projects (title, description) VALUES (?, ?)", [title, description]);
    res.json({ id: result.insertId, title, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateProject(req, res) {
  const { title, description } = req.body;
  try {
    await db.query("UPDATE projects SET title = ?, description = ? WHERE id = ?", [title, description, req.params.id]);
    res.json({ message: "Projet mis à jour" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteProject(req, res) {
  try {
    await db.query("DELETE FROM projects WHERE id = ?", [req.params.id]);
    res.json({ message: "Projet supprimé" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}