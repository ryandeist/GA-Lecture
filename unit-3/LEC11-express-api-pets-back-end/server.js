const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const petRouter = require('./controllers/pets.js');
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors({ origin: '*' }));

app.use(express.json());

app.use('/pets', petRouter);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
