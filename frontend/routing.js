const { log } = require("console");
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/login.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/home.html"));
});

app.get("/search", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/search.html"));
});

app.get("/profile/:id", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/profile.html"));
});

app.get("/library", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/library.html"));
});
