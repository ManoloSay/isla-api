const mongoose = require('mongoose');

// Esquema de las hogueras
const hogueraSchema = new mongoose.Schema({
  participante: { type: String, required: true },
  pareja_presente: { type: String },
  tentacion_presente: { type: String },
  reaccion: { type: String },
  decision: { type: String }
});

module.exports = mongoose.model('Hoguera', hogueraSchema, 'Hogueras');
