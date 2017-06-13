var express = require('express');
var router = express.Router();
var itemController = require('../controllers/item-controller')


router.get('/', itemController.findAll);

router.get('/latest', itemController.findLatest);

// create new item
router.post('/', itemController.newItem)

// delete item
router.delete('/:id', itemController.deleteItem)

// update item
router.put('/:id', itemController.updateItem)

// get item by id
router.get('/:id', itemController.getOneItem)

module.exports = router;
