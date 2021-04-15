const express = require('express');

const {
    read,
    create,
    update,
    updateColor,
    remove,
    removeColor,
} = require('./Controller');

const app = express();

app.use(express.json());

app.get('/api/projects', read);
app.post('/api/project', create);
app.put('/api/project/:id', update);
app.delete('/api/project/:id', remove);

app.put('/api/color/:id', updateColor);
app.delete('/api/color/:id', removeColor);

const PORT = 6600;
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
