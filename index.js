const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("Servidor corriendo exitosamente");
})

app.get("/", (req, res) => {
    res.send("Hola mundo");
})