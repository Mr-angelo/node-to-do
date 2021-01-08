const fs = require('fs');

let listadoPorHacer = [];

const guardarBD = () => {
    //stringify convierto un objeto a formato JSON.
    let data = JSON.stringify(listadoPorHacer)

    //Se escribe la información en un archivo
    // 1- path de donde se grabará el archivo, 2- información a grabar, 3- error
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar la tarea', err);
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
        //console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarBD();

    return porHacer;

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return true;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarBD();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}