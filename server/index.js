const express = require('express');

const {
    getDogs,
    addDog
} = require('./Controller');

const app = express();

const PORT = 6606;

app.use(express.json());

app.get('/api/dogs', getDogs);

app.post('/api/dogs', addDog);

console.log('hellow')
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

// app.get('/api/random', function (req, res) {
//     var err = null;
//     res.redirect('/id?hex=' + cutils.getRandomHex().substring(1));
// });