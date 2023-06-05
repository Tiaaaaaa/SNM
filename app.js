const path = require('path');

const express = require('express');
app = express();

const port = 3000;

require(path.join(__dirname, "/frontend/routing.js"));


app.use(express.static(path.join(__dirname, "/frontend")));

/**
 * Log alla console del server per il "tutto okay"
*/
app.listen(port, () => console.log(`Funziona, porta: ${port}`))
