const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { timestamps: true },
);

// Define User 
const User = mongoose.model("User", userSchema);

// share with the program
module.exports = User;