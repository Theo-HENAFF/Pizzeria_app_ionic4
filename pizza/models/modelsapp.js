const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PizzaSchema = new Schema(
{
    title : String,
    price : {
        type : Number,
        default : 1
    },
    amount : {
        type : Number,
        default : 1
    },
    plat_du_jour : {
		type : Boolean,
		default : false
    },
    url : {
        type : String,
        default : false,
        trim : true
    },
    description : {
        type : String,
        default : "Pas de description"
    }

});

module.exports = mongoose.model('Pizza',PizzaSchema);
