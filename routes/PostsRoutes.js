var express = require('express');
var router = express.Router();
var PostsControllers = require('../controllers/PostsControllers')

/* POST users listing. */
router.post('/', PostsControllers.create);
/* GET users listing. */
router.get('/', PostsControllers.all);
/* GET users listing. */
router.get('/:id', PostsControllers.find);
/* PUT users listing. */
router.put('/:id', PostsControllers.update);
/* DELETE users listing. */
router.delete('/:id', PostsControllers.destroy);

module.exports = router;