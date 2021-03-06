require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

// Habilitar public
app.use(express.static(path.resolve(__dirname,'../public')));

app.use(require('./routes/index.routes'));

// app.get('/', (req, res) => {
//     res.json('Hello World');
// })

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) {
        throw err;
    }

    console.log('Base de Datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
})