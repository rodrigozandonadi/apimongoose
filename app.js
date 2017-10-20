const express = require('express');
const bodyParser = require('body-parser');
const multiparty = require('connect-multiparty');
const path = require('path');
const consign = require('consign');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//body-parser
app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());
app.use(multiparty());

app.use(function(req, res, next){

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

//const index = require('./app/routes/index');
/*const api = require('./app/routes/api');
const apiByid = require('./app/routes/api');*/

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');



const port = 3000;

consign()
.include('app/models')
.then('app/controllers')
.then('app/routes')
.into(app);

//var ctrlGetbyId = require('./app/controllers/api');

//router.get('/api/:id', ctrlGetbyId.apiGetbyId);


//app.use(router)

app.listen(port, () => {
    console.log('Conectado na porta ' + port);
});