const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cliente = new Schema({
    nombre: String,
    apellido: String,
    empresa: String,
    email: String,
    telefono: Number,
    fecha: String,
});

module.exports = mongoose.model("Cliente", Cliente);