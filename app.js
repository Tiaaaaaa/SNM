const path = require('path');

const express = require('express');

app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "/frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/pages/login.html"));
});

/**
 * Log alla console del server per il "tutto okay"
*/
app.listen(port, () => console.log(`Funziona, porta: ${port}`))
