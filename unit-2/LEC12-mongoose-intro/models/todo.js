const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    //Schema Types: https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype
    text: String,
    isComplete: Boolean,
});

// TO CREATE A TODO OBJECT MODEL USING OUR SCHEMA ABOVE

const Todo = mongoose.model('Todo', todoSchema);

// This is also translating the model's name to a corresponding MongoDB collection name

module.exports = Todo;
