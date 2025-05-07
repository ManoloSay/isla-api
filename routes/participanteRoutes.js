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
    const actualizado = await Participante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Participante.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Participant eliminat' });
});

module.exports = router;
