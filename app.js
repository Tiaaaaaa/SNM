express = require('express');

app = express();

const port = 3000;

/**
 * Log alla console del server per il "tutto okay"
*/
app.listen(port, () => console.log(`Funziona, porta: ${port}`))
