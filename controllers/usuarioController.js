const Usuario = require("../models/Usuario");

exports.crearUsuario = async (req, res) => {

    try {
        let usuario;

        //Creamos usuario
        usuario = new Usuario(req.body)

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }

}

exports.obtenerUsuarios = async (req, res) => {
    try {
        
        const usuario = await Usuario.find();
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarUsuarios = async (req, res) => {
    try {
        const { nombre, apellido, edad, sexo } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: "no existe el usuario"})
        }

        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.edad = edad;
        usuario.sexo = sexo;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id}, usuario, {new: true} )
        res.json(usuario)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuario = async (req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: "no existe el usuario"})
        }

        res.json(usuario)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarUsuario = async (req, res) => {
    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({ msg: "no existe el usuario"})
        }

        await Usuario.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: "Usuario eliminado exitosamente"});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}