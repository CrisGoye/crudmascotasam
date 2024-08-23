const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    nombre: String,
    descripcion: String
});

const Servicio = mongoose.model('Servicio', servicioSchema);
module.exports = Servicio;