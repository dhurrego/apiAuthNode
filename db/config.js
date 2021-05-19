const mongoose = require("mongoose");

const dbConnection = async()  => {

    try {
        
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD Online')

    } catch (error) {
        console.log(error);
        throw new Error('Error conectando a la BD');
    }

}

module.exports = {
    dbConnection
}