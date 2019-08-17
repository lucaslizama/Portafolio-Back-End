const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://localhost/portafolio")
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log("Could not connect to mongoDB"));

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
