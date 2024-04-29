const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarioController');

// Definir la ruta para obtener todos los usuarios
router.get('/usuarios', usuariosController.getUsuarios);
router.get('/usuarios/:nombre', usuariosController.getUsuarioPorNombre);  // Nueva ruta para buscar por email


module.exports = router;
