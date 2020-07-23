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

const adminProductController = require(path.resolve(__dirname, '..', 'controllers', 'adminProductController'));

router.get('/admin/productos', adminProductController.index);
router.get('/admin/productos/agregar1', adminProductController.productAdd1);
router.post('/admin/productos/agregar1', upload.any(), adminProductController.create1);
router.get('/admin/productos/agregar2', adminProductController.productAdd2);
router.post('/admin/productos/agregar2', adminProductController.create2);
router.get('/admin/productos/agregar3', adminProductController.productAdd3);
router.post('/admin/productos/agregar3', adminProductController.create3);
router.get('/admin/productos/detalle/:id', adminProductController.detail);
router.get('/admin/productos/imagenes/:archivo', adminProductController.images);
router.put('/admin/productos/detalle/:id/editar/:propiedad', upload.any(), adminProductController.edit);
router.delete('/admin/productos/detalle/:id/borrar', adminProductController.delete);

module.exports = router;