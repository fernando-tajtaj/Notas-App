const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotaEsquema = new Schema({
    titulo: { type: String, require: true },
    descripcion: { type: String, require: true },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Nota', NotaEsquema);