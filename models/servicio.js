const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicioSchema = new Schema({
    servicio: String,
    descripcion: String
});

const Servicio = mongoose.model('servicio', servicioSchema);
module.exports = Servicio;