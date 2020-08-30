const path = require('path');
const fs = require('fs');
const db = require('../database/models');
//const { rawListeners } = require('process');
const Product = db.Product;
const Category = db.Category;
const Varietal = db.Varietal;
const Producer = db.Producer;
const {check, validationResult, body} = require('express-validator');


module.exports = {
    index: (req,res)=>{
        //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')))
        let productos = Product.findAll();
        let categorias = Category.findAll({
            order:[['id', 'ASC']]
        });
        let varietales = Varietal.findAll({
            order:[['id', 'ASC']]
        });
        let productores = Producer.findAll({
            order:[['id', 'ASC']]
        });
        Promise.all([productos, categorias, varietales, productores])
        .then(([productos, categorias, varietales, productores]) => res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminProduct'), {productos, categorias, varietales, productores}))
        .catch(error => res.send(error));
    },
    productAdd1: async (req,res)=>{
        /*let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')))*/
        let categorias = await db.Category.findAll({order:[['id', 'ASC']]});
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1'),{categorias})
    },
    productAdd2: (req,res)=>{
        let productor = db.Producer.findAll();
        let varietal = db.Varietal.findAll();
        Promise.all([productor, varietal])
        .then(([productor, varietal]) => res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd2'), {productor, varietal}));
    },
    productAdd3: (req,res)=>{res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd3'))
    },
    create1: async (req,res,next)=>{
        let errors = validationResult(req);
        if (!errors.isEmpty()){
            let categorias = await db.Category.findAll({order:[['id', 'ASC']]});
            let old = req.body
            if(req.files!=undefined && req.files.length>0){
                fs.unlink(path.resolve(__dirname, '../../public/images/productos/'+ req.files[0].filename),(err) => {
                    if (err){console.log(err)}});
                fs.unlink(path.resolve(__dirname, '../../public/images/productos/'+ req.files[1].filename),(err) => {
                    if (err){console.log(err)}});
            }
            res.render(path.resolve(__dirname, '..', 'views', 'admin', 'productAdd1'),{categorias, errors: errors.mapped(), old})
        } else {
            req.session.form1 = {
                sku: req.body.sku,
                nombre: req.body.nombre,
                categoria_id: req.body.categoria_id,
                precio: req.body.precio,
                img_sm: req.files[0].filename,
                img_lg: req.files[1].filename,
                volumen: req.body.volumen,
                descripcion: req.body.descripcion
            };
            res.redirect('/admin/productos/agregar2');
        }    
    },
    create2: (req,res)=>{
        req.session.form2 = req.body;
        res.redirect('/admin/productos/agregar3');
    },
    create3: async (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        
        productoNuevo = {
            id: productos[productos.length-1].id + 1,
            sku: req.session.form1.sku,
            nombre: req.session.form1.nombre,
            categoria_id: req.session.form1.categoria_id,
            precio: req.session.form1.precio,
            img_sm: req.session.form1.img_sm,
            img_lg: req.session.form1.img_lg,
            volumen: req.session.form1.volumen,
            descripcion: req.session.form1.descripcion,
            productor: req.session.form2.productor,
            varietal: req.session.form2.varietal,
            corte: req.session.form2.corte,
            cosecha: req.session.form2.cosecha,
            procedencia: req.session.form2.procedencia,
            alcohol: req.session.form2.alcohol,
            elaboracion: req.body.elaboracion,
            crianza: req.body.crianza,
            recomendados: req.body.recomendados,
            ofertas: req.body.ofertas,
            stock: req.body.stock
        };

        productos.push(productoNuevo)

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productos, null, 2));*/

        await Product.create({
            sku: req.session.form1.sku,
            name: req.session.form1.nombre,
            categoryId: req.session.form1.categoria_id,
            price: req.session.form1.precio,
            imageSm: req.session.form1.img_sm,
            imageLg: req.session.form1.img_lg,
            volume: req.session.form1.volumen,
            description: req.session.form1.descripcion,
            producerId: req.session.form2.productor,
            varietalId: req.session.form2.varietal,
            blend: req.session.form2.corte,
            vintage: req.session.form2.cosecha,
            region: req.session.form2.procedencia,
            alcohol: req.session.form2.alcohol,
            elaboration: req.body.elaboracion,
            aging: req.body.crianza,
            selection: req.body.recomendados,
            sale: req.body.ofertas,
            stock: req.body.stock
        });

        let productoNuevo = await Product.findAll({
            where: {
                name: req.session.form1.nombre
            },
            order:[
                ['id', 'DESC']
            ],
            limit: 1
        });

        delete req.session.form1;
        delete req.session.form2;
        
        res.redirect('/admin/productos/detalle/'+productoNuevo[0].id);
    },
    detail: (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let categorias = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'categorias.json')));
        let producto = productos.find(p=> req.params.id == p.id);
        let categoria = categorias.find(cat => producto.categoria_id == cat.id);
        res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminProductDetail'), {producto, categoria, categorias});*/
        let producto = Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"category"},
                {association:"producer"},
                {association:"varietal"}
            ]
        });
        let categorias = db.Category.findAll({order:[['id', 'ASC']]});
        let productores = db.Producer.findAll();
        let varietales = db.Varietal.findAll();

        Promise.all([producto, categorias, productores, varietales])
        .then(([producto, categorias, productores, varietales])=> res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminProductDetail'), {producto, categorias, productores, varietales}));
    },
    images: (req,res)=>{
        res.sendFile(path.resolve(__dirname, '..','..', 'public', 'images','productos', req.params.archivo));
    },
    edit: async (req,res,next)=>{
        let errors = validationResult(req);
        let errores = errors.errors.filter(e=>e.param == req.params.propiedad);
        if (errores.length>0){
            let producto = Product.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    {association:"category"},
                    {association:"producer"},
                    {association:"varietal"}
                ]
            });
            let categorias = db.Category.findAll({order:[['id', 'ASC']]});
            let productores = db.Producer.findAll();
            let varietales = db.Varietal.findAll();
            if(req.files!=undefined && req.files.length>0){
                fs.unlink(path.resolve(__dirname, '../../public/images/productos/'+ req.files[0].filename),(err) => {
                    if (err){console.log(err)}});
            }
            Promise.all([producto, categorias, productores, varietales])
            .then(([producto, categorias, productores, varietales])=> {
                res.render(path.resolve(__dirname, '..', 'views', 'admin', 'adminProductDetail'), {producto, categorias, productores, varietales, errors: errores})});
        } else {
        //let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        //let producto = productos.find(p=> req.params.id == p.id);
        //let id = req.params.id;
        let propiedad = req.params.propiedad;

        /*if(propiedad=="img_sm" || propiedad=="img_lg"){
            producto[propiedad] = req.files[0].filename;
        } else {
            producto[propiedad] = req.body[propiedad];
        };

        let productosEditados = productos.map(p=>{
            if (p.id == id) {
                return p=producto;
            } else {
                return p;
            }
        });         

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productosEditados, null, 2));
        res.redirect('/admin/productos/detalle/'+id);*/
        let producto = await Product.findByPk(req.params.id);
        
        if(propiedad=="imageSm" || propiedad=="imageLg"){
            producto[propiedad] = req.files[0].filename;
        } else {
            producto[propiedad] = req.body[propiedad];
        };

            if(producto.selection == undefined) {
                producto.selection = null;
            };

            if(producto.sale == undefined) {
                producto.sale = null;
            };

            await Product.update({
                sku: producto.sku,
                name: producto.name,
                categoryId: producto.categoryId,
                price: producto.price,
                imageSm: producto.imageSm,
                imageLg: producto.imageLg,
                volume: producto.volume,
                description: producto.description,
                producerId: producto.producerId,
                varietalId: producto.varietalId,
                blend: producto.blend,
                vintage: producto.vintage,
                region: producto.region,
                alcohol: producto.alcohol,
                elaboration: producto.elaboration,
                aging: producto.aging,
                selection: producto.selection,
                sale: producto.sale,
                stock: producto.stock
            },
            {
                where:{
                    id: req.params.id
                }
            });
                    
            res.redirect('/admin/productos/detalle/'+req.params.id);
        }
    },
    delete: async (req,res)=>{
        /*let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'data', 'productos.json')));
        let productosBorrados = productos.filter(p => p.id != req.params.id);
        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productosBorrados, null, 2));*/
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/admin/productos');
    },
    createCategory: async (req,res) => {
        await Category.create({
            name: req.body.categoryName
        })
        res.redirect('/admin/productos');
    },
    destroyCategory: async (req,res) =>{
        await Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin/productos');
    },
    createVarietal: async (req,res) => {
        await Varietal.create({
            name: req.body.varietalName
        })
        res.redirect('/admin/productos');
    },
    destroyVarietal: async (req,res) =>{
        await Varietal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin/productos');
    },
    createProducer: async (req,res) => {
        await Producer.create({
            name: req.body.producerName
        })
        res.redirect('/admin/productos');
    },
    destroyProducer: async (req,res) => {
        await Producer.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/admin/productos');
    }
};


