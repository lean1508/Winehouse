const path = require('path');
const fs = require('fs');

module.exports = (req,res,next) => {
    if (req.session.usuario == undefined && req.cookies.email){
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        let usuarioLogueado = users.find(user => user.email == req.cookies.email);
        delete usuarioLogueado.password;
        req.session.usuario = usuarioLogueado;
    };
    res.locals.usuario = req.session.usuario;
    next();
};