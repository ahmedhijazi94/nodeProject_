const express = require('express');
const routes = express.Router();

//require all controllers
const controllers = require('../controllers/config/callControllers.js')


//<USUARIOS>
//LISTAR TODOS OS USUARIOS
routes.get('/users', controllers.usuarioController.show);
//CRIAR USUARIO
routes.post('/users', controllers.usuarioController.create);
//</USUARIOS>

module.exports = routes;