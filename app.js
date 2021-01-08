//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log('Creando tarea...');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        console.log('Listando tareas...');
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('=========Tareas por Hacer============='.green);
            console.log('==                                  =='.green);
            console.log('==', tarea.descripcion, '           ==');
            console.log('==', 'Estado: ', tarea.completado, '==');
            console.log('======================================'.green);
        }
        break;

    case 'actualizar':
        console.log('Anctualizando tarea...');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado == true) {
            console.log('tarea actualizada!!!');
        } else {
            console.log("Error al actualizar");
        }
        break;

    case 'borrar':
        console.log('borrando tarea...');
        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado == true) {
            console.log('tarea borrada!!!');
        } else {
            console.log("Error al eliminar");
        }

        break;

    default:
        console.log('Comando desconocido');
}