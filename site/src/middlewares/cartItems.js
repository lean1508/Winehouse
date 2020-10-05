module.exports = (req,res,next) => {  
    if(req.session.cart){
        let totalItems = 0;
        for (let item of req.session.cart) {
            totalItems += item.quantity;
        }
        res.locals.cartItems = totalItems;
        return next();
    } else if(req.cookies.cart){
        let totalItems = 0;
        req.session.cart = req.cookies.cart;
        for (let item of req.cookies.cart) {
            totalItems += item.quantity;
        }
        res.locals.cartItems = totalItems;
        return next();
    } else {
        res.locals.cartItems = false;   
        req.cookies.cart = false;
        return next();
    }
    
};