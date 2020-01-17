const controllers = require('../controllers/controllersap');
const router = require('express').Router();

router.get('/pizza/shows', (req, res) => {
    controllers.getAllPizzas(req, res);
});

router.get('/pizza/show/:id', (req, res) => {
    controllers.getOnePizza(req, res);
});

router.post('/pizza/insertone', (req, res) => {
    controllers.insertPizza(req, res);
});
router.get('/pizza/getpdj', (req, res) =>{
    controllers.getPDJ(req, res);
});
router.delete('/pizza/deletepdj', (req, res) =>{
    controllers.deleteAllPDJ(req, res);
});
router.post('/pizza/deleteone', (req, res) =>{
    controllers.deleteOnePizzaByTitle(req, res);
});
module.exports = router;