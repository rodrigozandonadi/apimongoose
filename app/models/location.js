var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contatoSchema = new Schema ({
    name: [{ type: Schema.Types.ObjectId, ref: 'Usuario' }],
    id: {type: Number},
    address: { type: String},
    district: { type: String},
    city: { type: String},
    country: { type: String}
}, { collection: 'addresscollection'}
);

var Contato  = mongoose.model('Contato', contatoSchema);

module.exports = { Mongoose: mongoose, ContatoSchema: contatoSchema }
module.exports = Contato;