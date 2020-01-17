function getAllCommandes(req, res) {
    const Commande = require('../../commande/models');
    Commande.find({}, function(err, commandes) {
        if (err) throw err;
            res.json(commandes);
        });
}
function getOneCommande(req, res) {
    const Commande = require('../../commande/models');
    Commande.find({_id: req.params.id}, function(err,commande) {
        if(err) throw err;
            res.json(commande);
    });
}
function insertCommande(req, res) {
    const Commande = require('../../commande/models');
    const newCommande = Commande ({
        datee : Date(),
        nom : req.body.nom,
        prenom : req.body.prenom,
        numtel : req.body.numtel,
        qte : req.body.qte,
        title : req.body.title,

    });
    newCommande.save(function(err) {
        if (err) throw err;
            res.json({info: 'CommandeAdded'});
    });
}
function deleteOneCommandeById(req, res) {
    const commande = require('../../commande/models');
    commande.findOneAndDelete(
        {_id : req.body.id}, function(err, commande) {
        if (err) throw err;
            res.redirect("/adminpanel");
        });
}
module.exports.getAllCommandes = getAllCommandes;
module.exports.getOneCommande = getOneCommande;
module.exports.insertCommande = insertCommande;
module.exports.deleteOneCommandeById = deleteOneCommandeById;



