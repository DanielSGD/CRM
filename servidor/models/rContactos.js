const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Contacto = new Schema({
    cliente: String,
    descripcion: String,
    estado: String,
    fecha: String,
});

module.exports = mongoose.model("Constactos", Contacto);