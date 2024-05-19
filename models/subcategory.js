const mongoose = require('mongoose');
const Category = require('./category'); 


const subcategorySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String 
  },
  description: { 
    type: String 
  },
  taxApplicability: { 
    type: Boolean, 
    default: false 
  },
  tax: { type: Number, 
    default: 0 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category', 
    required: true 
  }
});

subcategorySchema.pre('save', async function(next) {
  if (this.isNew) {
    try {
      const category = await Category.findById(this.category);
      if (category) {
        this.taxApplicability = category.taxApplicability;
        this.tax = category.taxApplicability ? category.tax : 0;
      }
    } catch (err) {
      return next(err);
    }
  }
  next();
});


module.exports = mongoose.model('Subcategory', subcategorySchema);

