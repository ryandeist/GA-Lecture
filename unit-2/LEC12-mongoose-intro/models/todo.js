
// import mongoose
const mongoose = require('mongoose');

// Define the schema
const todoSchema = new mongoose.Schema({
    //Schema Types: https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype
    text: String,
    isComplete: Boolean,
});

// compile the schema into a model

const Todo = mongoose.model('Todo', todoSchema);

// Export to be able to access the models methods throughout our application.

module.exports = Todo;
