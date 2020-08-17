const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const User = db.User;

module.exports = {
    index: (req,res) =>{
        //let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        User.findAll()
        .then(users =>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUser'), {users})})  
    },
    show: async (req,res) =>{
        /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        let user = users.find(u => u.id == req.params.id);*/
        let user = await User.findByPk(req.params.id);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUserDetail'), {user});
    },
    edit: async (req,res) =>{
        /*let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        let user = users.find(u => u.id == req.params.id);
        user.role = Number(req.body.role);
        let editUsers = users.map(u =>{
            if (u.id == req.params.id) {
                return user;
            } else {
                return u;
            }
        });
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json'), JSON.stringify(editUsers, null, 2));
        res.redirect('/admin/usuarios/'+req.params.id);*/
        await User.update({
            role: Number(req.body.role)
        },
        {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/usuarios/'+req.params.id);
    }
};