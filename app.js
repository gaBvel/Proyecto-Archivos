const { configDotenv } = require('dotenv');
const express = require('express');
const path = require('path')

const app = express()

app.use(express.urlencoded({extended:false}));
app.use(express.json());

configDotenv({path:'.env'});

app.use('/resources', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

const bcryptjs = require('bcryptjs');
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/login', (req, res) =>{
    res.render('login')
})

app.post('/login', async (req, res) =>{
    const email = req.body.email;
    const pass = req.body.pass;

    let passwordHash = await bcryptjs.hash(pass, 8);
    connection.query('INSERT INTO usuarios SET ?', {email:email, password:passwordHash}, async(error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.send('ALTA EXITOSA')
        }
    })
})

const connection = require('./database/db');

app.listen(3008, (req, res) => {
    console.log('Servidor corriendo en http://localhost:3008')
})

