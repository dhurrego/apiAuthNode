const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/new',[
    check('name', 'El nombre es obligatorio').notEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria y debe tener minimo 6 caracteres').isLength({ min: 6 }),
], crearUsuario );

// Login de usuario
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria y debe tener minimo 6 caracteres').isLength({ min: 6 }),
], loginUsuario);

// Validar y revalidar token
router.get( '/renew', renewToken );


module.exports = router;