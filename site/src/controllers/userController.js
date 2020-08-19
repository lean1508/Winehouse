const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const User = db.User;

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
            if(req.file){
            fs.unlink(path.resolve(__dirname, '../../public/images/usuarios/'+ req.file.filename),(err) => {
                if (err){console.log(err)}})};
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'register'), {
                errors: errors.mapped(),  old: req.body
              });
        } else{
        /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        
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

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(users, null, 2));*/
        db.User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            alias: req.body.alias,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            role: 0,
            avatar: req.file.filename
        })

        res.redirect('/')
    
        }
    },
    login: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'login'))
    },
    ingresar: async (req,res)=>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'login'), {
                errors: errors.mapped(),  old: req.body});
        } else{
            /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
            let usuarioLogueado = users.find(user => user.email == req.body.email);*/
            let usuarioLogueado = await User.findOne({
                where: {
                    email: req.body.email
                   }
            })
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
    },
    editAvatar: async (req,res) =>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            fs.unlink(path.resolve(__dirname, '../../public/images/usuarios/'+ req.file.filename),(err) => {
                if (err){console.log(err)}});
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'userDetail'), {errors: errors.errors});
        } else {
            /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
            let user = users.find(user => user.id == res.locals.usuario.id);
            user.avatar = req.file.filename;
            let editUsers = users.map(u =>{
                if (u.id == res.locals.usuario.id) {
                    return user;
                } else {
                    return u;
                }
            });
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(editUsers, null, 2));
            req.session.usuario.avatar = user.avatar;*/
            await User.update({
                avatar: req.file.filename
            },{
                where:{
                    id: req.session.usuario.id
                }
            })
            res.locals.usuario.avatar = req.file.filename
            res.redirect('/usuario/perfil');
        };
    },
    editAlias: async (req,res) =>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'userDetail'), {errors: errors.errors});
        } else {
            /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
            let user = users.find(user => user.id == res.locals.usuario.id);
            user.alias = req.body.alias;
            let editUsers = users.map(u =>{
                if (u.id == res.locals.usuario.id) {
                    return user;
                } else {
                    return u;
                }
            });
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(editUsers, null, 2));
            req.session.usuario.alias = user.alias;*/
            await User.update({
                alias: req.body.alias
            },{
                where:{
                    id: req.session.usuario.id
                }
            })
            res.locals.usuario.alias = req.body.alias

            res.redirect('/usuario/perfil');
        };
    },
    editPassword: async (req,res) =>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render(path.resolve(__dirname, '..', 'views', 'usuario', 'userDetail'), {errors: errors.errors});
        } else {
            /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
            let user = users.find(user => user.id == res.locals.usuario.id);
            user.password = bcrypt.hashSync(req.body.newPassword, 10);
            let editUsers = users.map(u =>{
                if (u.id == res.locals.usuario.id) {
                    return user;
                } else {
                    return u;
                }
            });
            fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(editUsers, null, 2));*/
            await User.update({
                password: bcrypt.hashSync(req.body.newPassword, 10)
            },{
                where:{
                    id: req.session.usuario.id
                }
            })
            
            res.redirect('/usuario/perfil');
        };

    }
}