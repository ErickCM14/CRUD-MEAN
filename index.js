const express = require("express");
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'))


app.listen(3000, () => {
    console.log("Servidor corriendo exitosamente! puerto 3000");
})

app.get("/", (req, res) => {
    res.send("Hola mundo"); 
})
app.use('/api/usuarios', require('./routes/usuario'))