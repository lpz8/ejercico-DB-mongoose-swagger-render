const mongoose = require('mongoose');

require('dotenv').config();
const dbConnection = async() => {
    try {console.log("Intentando conectar con:", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        
        throw new Error('Error a la hora de iniciar la base de datos');
        console.error(error);
    }
};

module.exports = {
    dbConnection,
};