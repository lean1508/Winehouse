const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUser'), {users});
    },
    show: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        let user = users.find(u => u.id == req.params.id);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminUserDetail'), {user});
    },
    edit: (req,res) =>{
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
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
        res.redirect('/admin/usuarios/'+req.params.id);
    }
};