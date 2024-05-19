
const Subcategory = require('../models/subcategory');

// Create Subcategory
exports.createSubCategory = async (req, res) => {
  const { name, image, description, taxApplicability, tax, category } = req.body;
  const subcategory = new Subcategory({ name, image, description, taxApplicability, tax, category });
  try {
    const savedSubcategory = await subcategory.save();
    res.status(201).json(savedSubcategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Subcategories
exports.getSubCategories = async (req, res) => {
  try {
    const subcategories = await Subcategory.find().populate('category');
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Subcategories by Category ID
exports.getSubCategoryByCategoryId = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const subcategories = await Subcategory.find({ category: categoryId });
    res.json(subcategories);
  } catch (err) {
    console.error(`Error fetching subcategories: ${err.message}`);
    res.status(500).json({ message: err.message });
  }
};

// Get Subcategory by ID
exports.getSubCategoryById = async (req, res) => {
  try {
    const subcategory = await Subcategory.findById(req.params.id).populate('category');
    if (!subcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(subcategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Subcategory
exports.updateSubCategory = async (req, res) => {
  try {
    const updatedSubcategory = await Subcategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubcategory) return res.status(404).json({ message: 'Subcategory not found' });
    res.json(updatedSubcategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

