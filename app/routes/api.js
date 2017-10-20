var express = require('express');
module.exports = (app) => {

var ctrlGetApi = require('../controllers/api');
var ctrlGetbyId = require('../controllers/api');
var ctrlNewUser = require('../controllers/api');
var ctrlPostApi = require('../controllers/api');

app.get('/api', ctrlGetApi.apiGet);
app.get('/api/:id', ctrlGetbyId.apiGetbyId);
app.get('/newuser', ctrlNewUser.cadastro);
app.post('/cadastro', ctrlPostApi.apiPost);
}
//module.exports = router;