module.exports = (req,res,next) => {    
    if(req.session.cart){
        let totalItems = 0;
        for (let item of req.session.cart) {
            totalItems += item.quantity;
        }
        res.locals.cartItems = totalItems;
        return next();
    } else {
        res.locals.usuario = false;   
        next();
    }
};