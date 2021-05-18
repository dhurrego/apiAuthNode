const express = require('express');

// Crear el servidor/aplicación de express
const app = express();

// Rutas

app.use( '/api/auth', require('./routes/auth') );

// Ejecutar la aplicación
app.listen( 4000, () => {
    console.log(`Servidor corriendo en puerto ${ 4000 }`);
});