const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const itemRoutes = require('./routes/itemsRoutes');


const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/categories', categoryRoutes);
app.use('/subcategories', subcategoryRoutes);
app.use('/items', itemRoutes);

// MongoDB connection
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false, 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
