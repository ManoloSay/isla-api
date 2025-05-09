const express = require('express');
const Hoguera = require('../models/Hoguera');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    const hogueras = await Hoguera.find();
    res.json(hogueras);
});

// POST
router.post('/', async (req, res) => {
    const nuevaHoguera = new Hoguera(req.body);
    await nuevaHoguera.save();
    res.status(201).json(nuevaHoguera);
});

// PUT
router.put('/:id', async (req, res) => {
    const actualizada = await Hoguera.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
});

// PUT
router.put('/:id', async (req, res) => {
    try {
      const actualizado = await Hoguera.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!actualizado) {
        return res.status(404).json({ error: 'Hoguera no encontrada' });
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
    await Hoguera.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Foguera eliminada' });
});

module.exports = router;
