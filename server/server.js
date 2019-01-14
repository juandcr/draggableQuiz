require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// hacer publico la carpeta public 
app.use(express.static(path.resolve(__dirname, '../public')));

// Configuración de rutas
app.use(require('./routes/index'));




app.listen(process.env.PORT, () => {
    console.log("escuchando puerto", process.env.PORT);
});