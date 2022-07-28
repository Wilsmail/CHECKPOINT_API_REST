var express = require('express');
var router = express.Router();
var CatControllers = require('../controllers/CatControllers')

/* POST users listing. */
router.post('/', CatControllers.create);
/* GET users listing. */
router.get('/', CatControllers.all);
/* GET users listing. */
router.get('/:id', CatControllers.find);
/* PUT users listing. */
router.put('/:id', CatControllers.update);
/* DELETE users listing. */
router.delete('/:id', CatControllers.destroy);

module.exports = router;