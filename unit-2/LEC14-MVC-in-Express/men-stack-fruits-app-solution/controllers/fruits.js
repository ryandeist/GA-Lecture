const Fruit = require('../models/fruit');

const home = async (req, res) => {
    res.render('index.ejs');
};

const newFruit = (req, res) => {
    res.render('fruits/new.ejs');
};

const create = async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body);
    res.redirect('/fruits');
};

const index = async (req, res) => {
    const foundFruits = await Fruit.find();
    res.render('fruits/index.ejs', {
        fruits: foundFruits,
    });
};

const show = async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render('fruits/show.ejs', {
        fruit: foundFruit,
    });
};

const deleteFruit = async (req, res) => {
    await Fruit.findByIdAndDelete(req.params.fruitId);
    res.redirect('/fruits');
};

const edit = async (req, res) => {
    const foundFruit = await Fruit.findById(req.params.fruitId);
    res.render('fruits/edit.ejs', {
        fruit: foundFruit,
    });
};

const update = async (req, res) => {
    if (req.body.isReadyToEat === 'on') {
        req.body.isReadyToEat = true;
    } else {
        req.body.isReadyToEat = false;
    }
    await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
    res.redirect(`/fruits/${req.params.fruitId}`);
};

module.exports = {
    index,
    home,
    newFruit,
    create,
    show,
    deleteFruit,
    edit,
    update,
};