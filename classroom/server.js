const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hi, i'm root");
});

app.get("/users", (req, res) => {
    res.send("Get for Users");
});

app.get("/users/:id", (req, res) => {
    res.send("Get for show routes");
});

app.listen(3000, () => {
    console.log("Server is listing to 3000");
});

//MVC framework