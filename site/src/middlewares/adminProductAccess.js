module.exports = (req,res,next) => {
    if (req.session.usuario != undefined && req.session.usuario.role >= 1){
       next();
    } else {
        res.send('Acceso No Autorizado');
    }
};