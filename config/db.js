const mongoose = require('mongoose');
require('dotenv').config( {path: 'variables.env'} );
const mongoUri = "mongodb+srv://admin:admin123@cluster0.qaz2i.mongodb.net/meanusuario?retryWrites=true&w=majority"

const conectarDB = async () => {
 
    try {

        // await mongoose.connect(process.env.DB_MONGO, {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

module.exports = conectarDB;