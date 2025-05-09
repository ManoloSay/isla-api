const express = require('express');
const Participante = require('../models/Participante');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    const participantes = await Participante.find();
    res.json(participantes);
});

// POST
router.post('/', async (req, res) => {
    const nuevoParticipante = new Participante(req.body);
    await nuevoParticipante.save();
    res.status(201).json(nuevoParticipante);
});

// PUT
router.put('/:id', async (req, res) => {
    try {
      const actualizado = await Participante.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!actualizado) {
        return res.status(404).json({ error: 'Participante no encontrado' });
      }
      res.json(actualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

// DELETE
router.delete('/:id', async (req, res) => {
    const actualizado = await Participante.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
    await Participante.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Participant eliminat' });
    
});

module.exports = router;
