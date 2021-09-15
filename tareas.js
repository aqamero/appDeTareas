function escribirJSON(recibeArray){
    let recibeArrayEnJason = JSON.stringify(recibeArray);
    
    let fs = require("fs");
    let data = fs.writeFileSync('tareas.json', recibeArrayEnJason);
    
    return;
}

function guardarTarea(objetoTarea){
    let getTareas = leerJason();
    getTareas.push(objetoTarea);
    escribirJSON(getTareas);
    return;
}

function leerJason(){
    let fs = require('fs');
    let data = fs.readFileSync('tareas.json');

    let getTareas = JSON.parse(data);
    return getTareas;
}

function filtrarPorEstado(filtro){
    let tareas = leerJason();

    function leerPorEstado(filtro){
    
        let filtradas = tareas.filter(tareaF => tareaF.estado == filtro);
        return filtradas;
        };
    
    return leerPorEstado(filtro);

}
    
module.exports = {escribirJSON, guardarTarea, leerJason, filtrarPorEstado}