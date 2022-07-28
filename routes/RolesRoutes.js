var express = require('express');
var router = express.Router();
var RolesControllers = require('../controllers/RolesControllers')

/* POST users listing. */
router.post('/', RolesControllers.create);
/* GET users listing. */
router.get('/', RolesControllers.all);
/* GET users listing. */
router.get('/:id', RolesControllers.find);
/* PUT users listing. */
router.put('/:id', RolesControllers.update);
/* DELETE users listing. */
router.delete('/:id', RolesControllers.destroy);

module.exports = router;