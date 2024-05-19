const express = require('express');
const itemController = require('../controllers/itemController');
const router = express.Router();

router.post('/', itemController.createItem);
router.get('/', itemController.getItems);
router.get('/:id', itemController.getItemById);
router.get('/subcategory/:subcategoryId', itemController.getItemBySubcategoryId);
router.get('/category/:categoryId', itemController.getItemBycategoryId);
router.get('/search/:name', itemController.searchByName);
router.patch('/:id', itemController.updateItem);

module.exports = router;
