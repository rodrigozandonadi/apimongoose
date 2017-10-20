var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({    
    name: { type: String},
    email: { type: String},
    password: { type: String},
    birth: { type: String},
    contato: [{ type: Schema.Types.ObjectId, ref: 'Contato' }]
}, { collection: 'usercollection' }
);

var Usuario = mongoose.model('Usuario', userSchema);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }


