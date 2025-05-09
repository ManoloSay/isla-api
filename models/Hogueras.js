const mongoose = require('mongoose');
const hogueraSchema = new mongoose.Schema({
    nombre: { type: String,  },
    temporada: { type: Number,  },
    ubicacion: { type: String,  },
    parejas: { type: Number,  }
});
module.exports = mongoose.model('Hogueras', hogueraSchema);
