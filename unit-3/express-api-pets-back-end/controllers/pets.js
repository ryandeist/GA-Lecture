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
            res.status(404);
            throw new Error('The pet was not found');
        };
        res.status(200).json(foundPet);
    } catch (error) {
        console.log(error);
        if (res.statusCode === 404) {
            res.json({ error: 'The pet was not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        };
    };
});

router.delete('/:petId', async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
        if (!deletedPet) {
            res.status(404);
            throw new Error('The pet was not found');
        };
        res.status(200).json(deletedPet);
    } catch (error) {
        console.log(error);
        if (res.statusCode === 404) {
            res.json({ error: 'The pet was not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        };
    }
});

router.put('/:petId', async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body, { new: true });
        if (!updatedPet) {
            res.status(404);
            throw new Error('The pet was not found');
        };
        res.status(200).json(updatedPet);
    } catch (error) {
        console.log(error);
        if (res.statusCode === 404) {
            res.json({ error: 'The pet was not found' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        };
    };
    // res.json({ message: `PUT /pets/${req.params.petId}` });
});

module.exports = router;