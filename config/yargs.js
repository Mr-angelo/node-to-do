const { alias } = require('yargs');

const argv = require('yargs')
    .command('crear', 'Creando una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizando el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('borrar', 'Eliminar una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por eliminar'
        }
    })
    .help()
    .argv;

//Exportar modulos
module.exports = {
    argv
}