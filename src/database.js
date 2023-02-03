const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017/Notas-db-app')
    .then(() => console.log('Conexion a base de datos exitosa'))
    .catch(err => console.error(err));


