const mongoose = require('mongoose');
const participanteSchema = new mongoose.Schema({
    nombre: { type: String,  },
    edad: { type: Number,  },
    rol: { type: String, enum: ['tentador', 'pareja'],  },
    temporada: { type: Number,  }
});
module.exports = mongoose.model('Participantes', participanteSchema);
