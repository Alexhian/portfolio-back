import db from "../../database/db.js";

class AuthRepository {
	async readOneByEmail(email) {
		const [rows] = await db.query(
			`
    SELECT id, email, password, username, role
    FROM users
    WHERE email = ?
    LIMIT 1
    `,
			[email],
		);

		return rows[0];
	}

	async readOneById(id) {
		const [rows] = await db.query(
			`
    SELECT users.id, email, username, role
    FROM users
    WHERE users.id = ?
    LIMIT 1
    `,
			[id],
		);

		return rows[0];
	}
}

export default new AuthRepository();
