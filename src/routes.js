const express = require('express');
const controllers = require('./controllers/UserController')
const EstablishmentController = require('./controllers/EstablishmentController')
const CategoryController = require('./controllers/CategoryController')
const AddressController = require('./controllers/AddressController')
const multer = require("multer");
const multerConfig = require("./config/multer");


const routes = express.Router();

routes.get('/establishments/:establishment_id/addresses', AddressController.index);
routes.post('/establishments/:establishment_id/addresses', AddressController.store);

routes.post('/users', controllers.store);
routes.get('/users', controllers.index);
 routes.post('/users/login', controllers.login); 

routes.get('/establishments', EstablishmentController.index);
routes.post('/establishments', EstablishmentController.store);

routes.get('/categories', CategoryController.list);
routes.post('/categories', CategoryController.storeOne);
routes.delete('/categories', CategoryController.deleteOne);

routes.post("/posts", multer(multerConfig).single('file'));

routes.get('/establishments/:establishment_id/categories', CategoryController.index);
routes.post('/establishments/:establishment_id/categories', CategoryController.store);
routes.delete('/establishments/:establishment_id/categories', CategoryController.delete);
module.exports =  routes ;