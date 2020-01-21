const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hey! My name is Express :P'));

app.listen(3000, () => console.log('Express listening on port 3000'));
