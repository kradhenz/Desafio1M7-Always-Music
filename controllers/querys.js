import pool from '../config/db.js';

/* TEST
const getData = async () => {
    const response = await pool.query('SELECT NOW()');
    console.log(response);
}

getData();
*/

// ADD USERS
const addUser = async (req, res) => {
    const { name, email, password } = req.body;
    const response = await pool.query('INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *', [name, email, password]);
    res.json(response.rows);
}

addUser();