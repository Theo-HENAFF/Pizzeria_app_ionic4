function getAllPizzas(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    Pizza.find({}, function(err, pizzas) {
    if (err) throw err;
        res.json(pizzas);
    });
}
function getOnePizza(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    Pizza.find({_id : req.params.id}, function(err, pizza) {
    if (err) throw err;
        res.json(pizza);
    });
}
function insertPizza(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    const newPizza = Pizza ({
        title: req.body.title,
        price : req.body.price,
        amount : req.body.amount,
        plat_du_jour : req.body.plat_du_jour,
        url : req.body.url,
        description : req.body.description,
    });
    newPizza.save(function(err) {
        if (err) throw err;
            res.json({info: 'PizzaAdded'});
    });
}
function getPDJ(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    Pizza.find({plat_du_jour : 'true' }, function(err, pizza){
        if (err) throw err;
            res.json(pizza);
    });
}

function deleteAllPDJ(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    Pizza.deleteMany(
        {plat_du_jour : 'true'}, function(err, pizzas) {
        if (err) throw err;
            res.json({info : 'All plat_du_jour deleted'});
    });
}
function deleteOnePizzaByTitle(req, res) {
    const Pizza = require('../../pizza/models/modelsapp');
    Pizza.findOneAndDelete(
        {title : req.body.title}, function(err, pizzas) {
        if (err) throw err;
            res.json({info : 'The pizza ' + req.body.title + ' has been deleted'});
        });
}
module.exports.getAllPizzas = getAllPizzas;
module.exports.getOnePizza = getOnePizza;
module.exports.insertPizza = insertPizza;
module.exports.getPDJ = getPDJ;
module.exports.deleteAllPDJ = deleteAllPDJ;
module.exports.deleteOnePizzaByTitle = deleteOnePizzaByTitle;