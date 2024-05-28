import { addStudent, showStudents, showByRut, updateStudent, deleteStudent } from './controllers/queries.js';

const argument = process.argv.slice(2);
const option = argument[0];
const nombre = argument[1];
const rut = argument[2];
const curso = argument[3];
const nivel = argument[4];

const main = async () => {
    switch (option) {
        case 'nuevo':
            if (nombre && rut && curso && nivel) {
                await addStudent(nombre, rut, curso, nivel);
            } else {
                console.log("Please provide all necessary arguments: nombre, rut, curso, nivel.");
            }
            break;
        case 'consulta':
            await showStudents();
            break;
        case 'rut':
            if (rut) {
                await showByRut(rut);
            } else {
                console.log("Please provide the rut argument.");
            }
            break;
        case 'editar':
            if (nombre && rut && curso && nivel) {
                await updateStudent(nombre, rut, curso, nivel);
            } else {
                console.log("Please provide all necessary arguments: nombre, rut, curso, nivel.");
            }
            break;
        case 'eliminar':
            if (rut) {
                await deleteStudent(rut);
            } else {
                console.log("Please provide the rut argument.");
            }
            break;
        default:
            console.log("Unknown command. Please use one of the following commands: add, showAll, showByRut, update, delete.");
            break;
    }
};

main();