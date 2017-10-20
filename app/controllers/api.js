var mongoose = require('mongoose');

var URI = 'mongodb://localhost:27017/nodetest1';
mongoose.connect(URI);

module.exports.apiGet = (req, res) => {    
    var db = require("../models/user");
    var Usuario = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Usuario.find({}).lean().exec(
        function (e, docs) {
            res.json(docs);
            res.end();
        }
    );
    console.log('entrou na rota get da api');
}

module.exports.apiGetbyId = (req, res) => {    
    var db = require("../models/user");
    var Usuario = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    Usuario.find({ _id: req.params.id }).lean().exec(
        function (e, docs) {
            res.json(docs);
        }
    );
}

module.exports.cadastro = (req, res) => {
    res.render('cadastro', { title: "Adicionar novo usuário "});
}

module.exports.apiPost = (req, res) => {    
    var db = require("../models/user");
    var db2 = require("../models/location");

    var userName = req.body.name;
    var email = req.body.email;
    var city = req.body.email;
    var password = req.body.password;
    var birth = req.body.birth;

    var address = req.body.address;
    var district = req.body.district;
    var city = req.body.city;
    var contry = req.body.contry;

    var Usuario = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
    var Contato = db.Mongoose.model('Contato', db.contatoSchema);;
    var user = new Usuario({
         name : userName, 
         email : email, 
         city: city, 
         password: password,
         birth:birth
    });

    user.save((err) => {
        if(err){
            console.log("Véi... deu ruim!!! Óia só: " + err.message);
            res.status(500).json({ error: err.message });
            res.end();
            return;
        }

        console.log('eita, ta bonito')
    
        // o usuário Rodrigo já existe, falta agora criar o endereço
        var contato = new Contato({
            nome: user._id,
            address : address, 
            district : district, 
            city:  city, 
            contry: contry
        });
     
        contato.save((err) => {
            if(err){
                console.log("Véi... deu ruim!!! Óia só: " + err.message);
                res.status(500).json({ error: err.message });
                res.end();
                return;
            }
            res.json(contato);
            res.end();
            console.log("Contato Salvo");
        });
        console.log('é bambito, salvou!');
        res.json(user);
        res.end();
        console.log('Usuário Salvo');
    });
}
