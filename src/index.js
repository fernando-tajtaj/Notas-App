const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Inicializaciones
const app = express();
require('./database');

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', '.hbs');

// Intermedios
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));
// Variables Globales
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(require('./routes/index.js'));
app.use(require('./routes/usuario.js'));
app.use(require('./routes/notas.js'));

// Archivos Estaticos

// Servidor inicializado
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto: ', app.get('port'));
});