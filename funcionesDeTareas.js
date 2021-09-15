const fs = require('fs');
let rawdata = fs.readFileSync('tareas.json');
let getTareas = JSON.parse(rawdata);
module.exports = getTareas;