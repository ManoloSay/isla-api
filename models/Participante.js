const mongoose = require('mongoose');

// Esquema de los participantes
const participanteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  ciudad: { type: String, required: true },
  estado_actual: { type: String, required: true },
  pareja: { type: String },
  tentaciones: [{
    nombre: String,
    edad: Number,
    compatibilidad: Number
  }],
  infidelidades: { type: Number, required: true }
});

module.exports = mongoose.model('Participante', participanteSchema, 'Participantes');
