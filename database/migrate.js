import "dotenv/config";

import { readFileSync } from "node:fs";
import { createConnection } from "mysql2/promise";

const migrate = async () => {
	const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

	const connection = await createConnection({
		host: DB_HOST,
		user: DB_USER,
		password: DB_PASSWORD,
		multipleStatements: true,
	});

	await connection.query(`drop database if exists ${DB_NAME}`);
	await connection.query(`create database ${DB_NAME}`);
	await connection.query(`use ${DB_NAME}`);

	const sql = readFileSync("./database/schema.sql", "utf8");

	await connection.query(sql);

	connection.end();
};

try {
	migrate();
	console.info("portfolio2 updated 🆙");
} catch (err) {
	console.error(err);
}
