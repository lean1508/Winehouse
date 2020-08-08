const path = require('path');

module.exports = (req, res, next) => {
    if(req.session.usuario != undefined){
        next();
    } else {
        res.render(path.resolve(__dirname, '..', 'views', 'web', 'accesoProhibido'));
    }
};