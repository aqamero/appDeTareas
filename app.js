let notas = require("./funcionesDeTareas");
let llamandoTareas = require("./tareas");

if (process.argv.length < 3) {
    console.log("Atención - Tienes que pasar una acción .");
} else {
    switch (process.argv[2]){
        case "listar":
            notas.forEach(function(item,index){
                console.log(item);
            });
            break;
        case "crear":           
            let nuevaTarea = new Object();
            nuevaTarea.titulo = process.argv[3];
            nuevaTarea.estado = "pendiente";
          
            llamandoTareas.guardarTarea(nuevaTarea);
            break;
        case "filtrar":
            let filtro = process.argv[3];
            let tarea = llamandoTareas.filtrarPorEstado(filtro);
            console.log(tarea);
            break;
        default:
            console.log("No entiendo qué quieres hacer .");
            break;
    } 
}
