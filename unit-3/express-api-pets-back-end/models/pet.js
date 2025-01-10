const mongoose = require('mongoose');

const petSchema = mongoose.Schema({ 
    name: { type: String, required: true },
    age: { type: Number, min: 0, required: true },
    breed: String
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;  // Export the model for use in other files