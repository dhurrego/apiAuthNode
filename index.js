const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// GET
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        msg: "Todo salio bien",
        uid: 1234
    });
});

// Ejecutar la aplicación
app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});