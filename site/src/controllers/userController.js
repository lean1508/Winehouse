const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'register'))
    },
    register: (req,res,next)=>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        
        usuarioNuevo = {
            id: users[users.length-1].id + 1,
            name: req.body.name,
            lastName: req.body.lastName,
            alias: req.body.alias,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            role: 0,
            avatar: req.file.filename
        }
        
        users.push(usuarioNuevo);

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(users, null, 2));

        res.redirect('/')

    }
}