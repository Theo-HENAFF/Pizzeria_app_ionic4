const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commandeSchema = new Schema({
    nom : String,
    prenom : String,
    numtel : Number,
    datee : Date,
    title : {
        type : String,
    },
    qte : String,

});

module.exports = mongoose.model('commande',commandeSchema);
