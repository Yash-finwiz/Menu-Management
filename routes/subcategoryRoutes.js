const express = require('express');
const subCategoryController = require('../controllers/subCategoryController');
const router = express.Router();

router.post('/', subCategoryController.createSubCategory);
router.get('/', subCategoryController.getSubCategories);
router.get('/category/:categoryId', subCategoryController.getSubCategoryByCategoryId);
router.get('/:id', subCategoryController.getSubCategoryById);
router.patch('/:id', subCategoryController.updateSubCategory);

module.exports = router;
