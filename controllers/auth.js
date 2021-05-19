const { response, request } = require('express');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

const crearUsuario = async(req = request, res = response) => {
    const { email, name, password } = req.body;

    try {
        // Verificar email (que no exista)
        const usuario = await Usuario.findOne({ email });

        if(usuario){
            return res.status(400).json({
                ok:false,
                msg: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario con el modelo
        const dbUser = new Usuario( req.body );

        // Hash de la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password, salt);

        // Generar el JWT

        // Crear usuario de BD
        await dbUser.save();

        // Generar respuesta exitosa    
        return res.status(201).json({
            ok: true,
            uid: dbUser.id,
            name
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });    
    }
    
};

const loginUsuario = (req = request, res = response) => {
    const { email, password } = req.body;
    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    });
};

const renewToken = (req = request, res = response) => {
    return res.json({
        ok: true,
        msg: 'Renew token /renew'
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    renewToken
};