const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use(cors());

const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}`;

app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    const queryString = `&q=${city}`;
    const apiRes = await fetch(BASE_URL + queryString);
    const data = await apiRes.json();
    res.json(data);
});