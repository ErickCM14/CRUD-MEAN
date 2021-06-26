//Rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuarios);
router.put('/:id', usuarioController.actualizarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;