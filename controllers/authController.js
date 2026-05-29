const bcryptjs = require('bcryptjs')
const connection = require('../database/db')

exports.viewLogin = (req, res) =>{
    res.render('login');
};

exports.register = async(req, res) =>{
    const email = req.body.email;
    const pass = req.body.pass;

    let passwordHash = await bcryptjs.hash(pass, 8);
    connection.query(
        'INSERT INTO usuarios SET ?',
        {
            email: email,
            password: passwordHash
        },
        async (error, results) =>{
            if(error){
                console.log(error);
            }else{
                res.send('ALTA EXITOSA')
            }
        }
    );
};

