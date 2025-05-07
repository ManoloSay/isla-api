require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json()); // Para poder recibir datos en formato JSON
app.use(cors()); // Para permitir solicitudes de diferentes orígenes

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conectado a MongoDB - IslaDB"))
  .catch(err => console.log(err));

// Ruta de prueba
app.get('/', (req, res) => res.send("API Isla en funcionamiento!"));

// Puerto de la API
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en marcha a http://localhost:${PORT}`));

const participanteRoutes = require('./routes/participanteRoutes');
const hogueraRoutes = require('./routes/hogueraRoutes');

// Rutas de participantes y hogueras
app.use('/participantes', participanteRoutes);
app.use('/hogueras', hogueraRoutes);
