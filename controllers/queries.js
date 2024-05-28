import pool from '../config/db.js';

/* TEST
const getData = async () => {
    const response = await pool.query('SELECT NOW()');
    console.log(response);
}

getData();
*/

const argument = process.argv.slice(2);
const option = argument[0];
const nombre = argument[1];
const rut = argument[2];
const curso = argument[3];
const nivel = argument[4];


// 1. ADD STUDENT: Agregar un nuevo estudiante.
const addStudent = async (nombre, rut, curso, nivel) => {
    try {
        const sql = 'INSERT INTO students (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)';
        const values = [nombre, rut, curso, nivel];
        const response = await pool.query(sql, values);
        console.log("ADDED:", response.rowCount);
    } catch (err) {
        console.log("ERROR ADDING STUDENTS:", err);
    }
}

// addStudent(nombre, rut, curso, nivel); // TEST

// 2. SHOW ALL STUDENT: Consultar los estudiantes registrados.
const showStudents = async () => {
    try {
        const sql = 'SELECT * FROM students';
        const response = await pool.query(sql);
        console.log('Estudiantes registrados\n', response.rows);
    } catch (err) {
        console.log("ERROR SHOWING STUDENTS:", err);
    }
}

//showStudents(); // TEST

// 3. SHOW STUDENT BY RUT: Consultar estudiante por rut.
const showByRut = async (rut) => {
    try {
        const sql = 'SELECT * FROM students WHERE rut = $1';
        const values = [rut];
        const response = await pool.query(sql, values);
        console.log(response.rows);
    } catch (err) {
        console.log("ERROR SHOWING STUDENT BY RUT:", err);
    }
}

//showByRut(rut); // TEST

// 4. UPDATE STUDENT: Actualizar la información de un estudiante.
const updateStudent = async (nombre, rut, curso, nivel) => {
    try {
        const sql = 'UPDATE students SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE rut = $2';
        const values = [nombre, rut, curso, nivel];
        const response = await pool.query(sql, values);
        console.log("UPDATED:", response.rowCount);
    } catch (err) {
        console.log("ERROR UPDATING STUDENT:", err);
    }
}

//updateStudent(nombre, rut, curso, nivel); // TEST

// 5. DELETE STUDENT: Eliminar el registro de un estudiante.
const deleteStudent = async (rut) => {
    try {
        const sql = 'DELETE FROM students WHERE rut = $1';
        const values = [rut];
        const response = await pool.query(sql, values);
        console.log("DELETED:", response.rowCount);
    } catch (err) {
        console.log("ERROR DELETING STUDENT:", err);
    }
}

//deleteStudent(rut); // TEST

export  { addStudent, showStudents, showByRut, updateStudent, deleteStudent };