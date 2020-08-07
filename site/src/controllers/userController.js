const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const {
    check,
    validationResult,
    body
  } = require('express-validator');

module.exports = {
    index: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'register'))
    },
    register: (req,res,next)=>{

        let errors = validationResult(req);
        if (!errors.isEmpty()){
            fs.unlink(path.resolve(__dirname, '../../public/images/usuarios/'+ req.file.filename),(err) => {
                if (err){console.log(err)}});
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'register'), {
                errors: errors.mapped(),  old: req.body
              });
        } else{
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
    },
    login: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'login'))
    },
    ingresar: (req,res)=>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
            let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
            let recomendados = productos.filter(p => p.recomendados == "on");
            let ofertas = productos.filter(p => p.ofertas == "on");
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'login'), {
                errors: errors.mapped(),  old: req.body, productos, recomendados, ofertas});
        } else{
            let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
            let usuarioLogueado = users.find(user => user.email == req.body.email);
            delete usuarioLogueado.password;
            req.session.usuario = usuarioLogueado;
            if(req.body.recordarme){
                res.cookie('email', usuarioLogueado.email, {maxAge: 1000 * 60 * 60 * 48})
            }
            res.redirect('/');
        }
    },
    logout: (req,res)=>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    },
    profile: (req,res)=>{
        res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'userDetail'));
    }
}