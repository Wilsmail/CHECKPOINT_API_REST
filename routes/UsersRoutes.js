var express = require('express');
var router = express.Router();
var UsersControllers = require('../controllers/UsersControllers')

/* POST users listing. */
router.post('/', UsersControllers.create);
/* GET users listing. */
router.get('/', UsersControllers.all);
/* GET users listing. */
router.get('/:id', UsersControllers.find);
/* PUT users listing. */
router.put('/:id', UsersControllers.update);
/* DELETE users listing. */
router.delete('/:id', UsersControllers.destroy);

module.exports = router;
