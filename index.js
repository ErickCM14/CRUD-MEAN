const express = require("express");
const conectarDB = require('./config/db');


const app = express();

//Conectamos a la BD
conectarDB();

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'))


app.listen(3000, () => {
    console.log("Servidor corriendo exitosamente!");
})

app.get("/", (req, res) => {
    res.send("Hola mundo"); 
})
app.use('/api/usuarios', require('./routes/usuario'))