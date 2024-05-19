const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// Create Item
exports.createItem = async (req, res) => {
  const { name, image, description, taxApplicability, tax, baseAmount, discount, subcategory, category } = req.body;
  const totalAmount = baseAmount - discount;
  const item = new Item({ name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount, subcategory, category });
  try {
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('subcategory');
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Items by Subcategory ID
exports.getItemBySubcategoryId = async (req, res) => {
  try {
    const items = await Item.find({ subcategory: req.params.subcategoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get Items by category ID
exports.getItemBycategoryId = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get Item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('subcategory');
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Item
exports.updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Search Item by Name
exports.searchByName = async (req, res) => {
  try {
    const items = await Item.find({ name: new RegExp(req.params.name, 'i') });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


