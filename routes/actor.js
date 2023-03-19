const express = require('express');
const router = express.Router();
const Actor = require('../models/actors');

// POST a new actor
router.post('/', async (req, res) => {
    try {
      const actor = new Actor(req.body);
      await actor.save();
      res.status(201).send(actor);
    } catch (err) {
      res.status(400).send(err);
    }
});


  // GET all actors
router.get('/', async (req, res) => {
    try {
      const actors = await Actor.find();
      res.status(200).send(actors);
    } catch (err) {
      res.status(500).send(err);
    }
});


  // GET a specific actor by ID
router.get('/:id', async (req, res) => {
    try {
      const actor = await Actor.findById(req.params.id);
      if (!actor) {
        return res.status(404).send();
      }
      res.status(200).send(actor);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

  // UPDATE an actor by ID
router.put('/:id', async (req, res) => {
    try {
      const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!actor) {
        return res.status(404).send();
      }
      res.status(200).send(actor);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // DELETE an actor by ID
  router.delete('/:id', async (req, res) => {
    try {
      const actor = await Actor.findByIdAndDelete(req.params.id);
      if (!actor) {
        return res.status(404).send();
      }
      res.status(200).send(actor);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  module.exports = router;