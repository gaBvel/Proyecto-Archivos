const express = require('express');
const path = require('path');
const session = require('express-session');
const { configDotenv } = require('dotenv');

const app = express();

configDotenv({path:'.env'});

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/resources', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

/*Rutas*/
app.use(require('./routes/authRoutes'));
app.use(require('./routes/archivoRoutes'));
app.use(require('./routes/modalRoutes'));

/*Servidor*/
app.listen(3008, (req, res) => {
    console.log('Servidor corriendo en http://localhost:3008');
});

