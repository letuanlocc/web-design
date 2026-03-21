const express = require('express');																						
const router = express.Router();																						
const productController = require('../controllers/productController');																						
const multer = require('multer');																						
const path = require('path');																						
																						
// reuse multer setup from app.js? for simplicity, re-declare or export from app.js.																						
// Here assume app.js exports upload instance, but for self-contained demo we can create same storage.																						
// For brevity, in this example we expect app.js to attach `req.uploadMiddleware` or we can reimport a shared module.																						
// Simpler: require('../app').upload — but avoid circular. So best approach: create a small multer.js shared file.																						
// For clarity in this guide, assume upload middleware is provided as argument when mounting routes.																						
module.exports = (upload) => {																						
  router.post('/', upload.single('image'), productController.create);																						
  router.get('/', productController.list);																						
  router.get('/:id', productController.get);																						
  router.put('/:id', upload.single('image'), productController.update);																						
  router.delete('/:id', productController.remove);																						
  return router;																						
};																						
																						
