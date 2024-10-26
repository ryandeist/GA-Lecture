const express = require('express');
const app = express();

app.use(express.json());

// to track our calculator total
let total = 0; 

app.get('/calculator', (req, res) => {
    res.status(200).json({total});
});

app.post('/calculator', (req, res) => {
    const number = req.body.number;
    const operation = req.body.operation;

    if (typeof number !== 'number') {
        return res.status(400).json({error: 'Invalid Number'})
    };

    if(!operation) {
        return res.status(400).json({error:'Invalid Operation'});
    };

    if (operation === 'add') {
        total += number;
    } else if (operation === 'subtract') {
        total -= number;
    } else if (operation === 'multiply') {
        total *= number;
    } else if (operation === 'divide') {
        total /= number;
    } else {
        return res.status(400).json({error:'Invalid Operation'});
    };
    res.status(200).json({total});
});

app.delete("/calculator", (req,res) => {
    total = 0;
    res.json({total});
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


