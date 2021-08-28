const express = require("express");
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
//Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/usuarios', require('./routes/usuario'))


app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente! puerto ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("Hola mundo"); 
})
app.use('/api/usuarios', require('./routes/usuario'))