// server.js

const express = require('express');
const app = express();

// add the following:
const inventory = [
  { name: 'Candle', qty: 4 },
  { name: 'Cheese', qty: 10 },
  { name: 'Phone', qty: 1 },
  { name: 'Tent', qty: 0 },
  { name: 'Torch', qty: 5 }
]

app.get('/', (req, res) => {
  res.render('home.ejs', { 
    msg: 'Here is your inventory',
    player: {
      name: "Ryan"
    },
    // change the following line to: 
    inventory: inventory,
  });
});

app.get('/:itemId', (req, res) => {
    const index = req.params.itemId;
    // render show.ejs, and pass it a single item object 
    res.render('show.ejs', {
      item: inventory[index]
    });
  });
  

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

