const express = require('express');
const routes = express.Router();
const CovidController = require('./controllers/CovidController');


routes.get('/covids', CovidController.index);
routes.post('/covids', CovidController.store);
routes.get('/covids/:id', CovidController.show);
routes.put('/covids/:id', CovidController.update);
routes.delete('/covids/:id', CovidController.destroy);


  module.exports = routes;


