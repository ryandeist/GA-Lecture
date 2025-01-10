const Pet = require('../models/pet.js');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdPet = await Pet.create(req.body);
        res.status(201).json(createdPet);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    };
});

router.get('/', async (req, res) => {
    try {
        const allPets = await Pet.find();
        res.status(200).json(allPets);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    };
});

router.get('/:petId', async (req, res) => {
    try {
        const foundPet = await Pet.findById(req.params.petId);
        if (!foundPet) {
            res.status(404).json({ error: 'Pet not found' });
        };
        res.status(200).json(foundPet);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;