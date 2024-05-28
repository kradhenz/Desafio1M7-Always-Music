import { addStudent, showStudents, showByRut, updateStudent, deleteStudent } from './controllers/queries.js';

const argument = process.argv.slice(2);
const option = argument[0];
const nombre = argument[1];
const rut = argument[2];
const curso = argument[3];
const nivel = argument[4];

const main = async () => {
    switch (option) { // switch case for different commands
        case 'nuevo':
            if (nombre && rut && curso && nivel) { // validation for all arguments 
                await addStudent(nombre, rut, curso, nivel); // call function to add student
            } else {
                console.log("Please provide all necessary arguments: nombre, rut, curso, nivel.");
            }
            break;
        case 'consulta':
            await showStudents(); // call function to show all students
            break;
        case 'rut':
            if (rut) { // validation for rut
                await showByRut(rut); // call function to show student by rut
            } else {
                console.log("Please provide the rut argument.");
            }
            break;
        case 'editar':
            if (nombre && rut && curso && nivel) { // validation for all arguments
                await updateStudent(nombre, rut, curso, nivel); // call function to update student
            } else {
                console.log("Please provide all necessary arguments: nombre, rut, curso, nivel.");
            }
            break;
        case 'eliminar':
            if (rut) { // validation for rut
                await deleteStudent(rut); // call function to delete student
            } else {
                console.log("Please provide the rut argument.");
            }
            break;
        default: // unknown command
            console.log("Unknown command. Please use one of the following commands: add, showAll, showByRut, update, delete.");
            break;
    }
};

main(); // call main function