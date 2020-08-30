const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '..','..','public','images','productos'));
    },
    filename: function (req, file, cb) {
      cb(null, 'producto-'+Date.now() + path.extname(file.originalname));
    }
  })
   
const upload = multer({ storage })

const access = require('../middlewares/adminProductAccess');

const productCreateCheck = require('../middlewares/productCreateCheck');

const productEditCheck = require('../middlewares/productEditCheck');

const adminProductController = require(path.resolve(__dirname, '..', 'controllers', 'adminProductController'));

router.get('/admin/productos', access,adminProductController.index);
router.get('/admin/productos/agregar1', access, adminProductController.productAdd1);
router.post('/admin/productos/agregar1', upload.any(), access, productCreateCheck, adminProductController.create1);
router.get('/admin/productos/agregar2', access, adminProductController.productAdd2);
router.post('/admin/productos/agregar2', access, adminProductController.create2);
router.get('/admin/productos/agregar3', access, adminProductController.productAdd3);
router.post('/admin/productos/agregar3', access, adminProductController.create3);
router.get('/admin/productos/detalle/:id', access, adminProductController.detail);
router.get('/admin/productos/imagenes/:archivo', access, adminProductController.images);
router.put('/admin/productos/detalle/:id/editar/:propiedad', upload.any(), access, productEditCheck, adminProductController.edit);
router.delete('/admin/productos/detalle/:id/borrar', access, adminProductController.delete);
router.post('/admin/categoria/agregar', access, adminProductController.createCategory);
router.delete('/admin/categoria/:id/borrar',access, adminProductController.destroyCategory);
router.post('/admin/varietal/agregar', access, adminProductController.createVarietal);
router.delete('/admin/varietal/:id/borrar',access, adminProductController.destroyVarietal);
router.post('/admin/productor/agregar', access, adminProductController.createProducer);
router.delete('/admin/productor/:id/borrar',access, adminProductController.destroyProducer);


module.exports = router;