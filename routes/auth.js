const { Router } = require('express');
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/new', crearUsuario );

// Login de usuario
router.post( '/', loginUsuario);

// Validar y revalidar token
router.get( '/renew', renewToken );


module.exports = router;