const db = require('../database/models');
const User = db.User;

module.exports = (req,res,next) => {
    /*if (req.session.usuario == undefined && req.cookies.email){
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'usuarios.json')));
        let usuarioLogueado = users.find(user => user.email == req.cookies.email);
        delete usuarioLogueado.password;
        req.session.usuario = usuarioLogueado;
    };
    res.locals.usuario = req.session.usuario;
    next();*/
    res.locals.usuario = false;   
    if(req.session.usuario){
        res.locals.usuario = req.session.usuario;
        return next();
    } else if(req.cookies.email){
        User.findOne({where:{email:req.cookies.email}})
            .then(user => {
            let userLogueado = user;
            delete userLogueado.password;            
            req.session.usuario = userLogueado;
            res.locals.usuario = userLogueado;
            return next();
            })
            .catch(error => res.send(error));
    }
    setTimeout(()=>next(),10);
};