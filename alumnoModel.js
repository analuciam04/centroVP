const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alumnoSchema = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    email: String,
    ciudad: String
});

var Alumno = mongoose.model('alumno', alumnoSchema);
module.exports =  Alumno;