import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import "dotenv/config";

const app = express();
const port = process.env.APP_PORT;
app.use(cors());
app.use(express.json());
app.use(router);


app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", () => {
    console.error("Error:", err.message);
  });

