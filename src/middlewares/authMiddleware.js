import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { verify } = jwt;

export function verifyToken(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Accès refusé" });

  verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token invalide" });
    req.user = decoded;
    next();
  });
}

export function verifyAdmin(req, res, next) {
  if (req.user.role !== "admin")
    return res.status(403).json({ error: "Accès réservé aux administrateurs" });
  next();
}