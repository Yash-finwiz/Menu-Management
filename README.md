
# Menu Management

# Item Management API

This repository contains the backend code for an Item Management API built using Node.js, Express, and MongoDB. The API allows for the creation, retrieval, updating, and deletion of items, categories, and subcategories.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database Choice](#database-choice)
- [Learnings](#learnings)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)

## Installation

1. **Clone the repository:**
   ```bash
     git clone https://github.com/Yash-finwiz/Menu-Management.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=mongodb://localhost:27017/item_management
   PORT=5000
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

Use a tool like Postman to interact with the API. You can test different endpoints to create, retrieve, update, and delete items, categories, and subcategories.

## Endpoints

### Items
- **Create Item**
  - `POST /items`
  - Body: `{ "name": "Item1", "image": "url", "description": "desc", "taxApplicability": true, "tax": 5, "baseAmount": 100, "discount": 10, "subcategory": "subcategoryId", "category": "categoryId" }`

- **Get All Items**
  - `GET /items`

- **Get Item by ID**
  - `GET /items/:id`

- **Get Items by Subcategory ID**
  - `GET /items/subcategory/:subcategoryId`

- **Get Items by Category ID**
  - `GET /items/category/:categoryId`

- **Search Items by Name**
  - `GET /items/search/:name`

- **Update Item**
  - `PATCH /items/:id`
  - Body: `{ "name": "NewName", "image": "newUrl" }`

### Categories
- **Create Category**
  - `POST /categories`
  - Body: `{ "name": "Category1", "image": "url", "description": "desc", "taxApplicability": true, "tax": 5, "taxType": "percentage" }`

- **Get All Categories**
  - `GET /categories`

- **Get Category by ID**
  - `GET /categories/:id`

- **Update Category**
  - `PATCH /categories/:id`
  - Body: `{ "name": "NewName" }`

### Subcategories
- **Create Subcategory**
  - `POST /subcategories`
  - Body: `{ "name": "Subcategory1", "description": "desc", "categoryId": "categoryId" }`

- **Get All Subcategories**
  - `GET /subcategories`

- **Get Subcategory by ID**
  - `GET /subcategories/:id`

- **Get Subcategory by category ID**
  - `GET /subcategories/category/categoryid`

- **Update Subcategory**
  - `PATCH /subcategories/:id`
  - Body: `{ "name": "NewName" }`

## Database Choice

**Which database you have chosen and why?**

For this project, I chose MongoDB as the database. MongoDB is a NoSQL database that is highly flexible and scalable, making it an excellent choice for applications that require handling hierarchical data structures, such as categories, subcategories, and items in a menu management system. MongoDB's document-oriented nature allows for easy representation of nested data, and its schema-less design provides the flexibility to evolve the data model as the application grows. Additionally, using Mongoose, an ODM (Object Data Modeling) library for MongoDB, simplifies data validation and querying, making development more efficient.

## Learnings

**3 things that you learned from this assignment:**

1. Project Structuring and Organization:
I learned how to effectively structure a Node.js project by organizing the code into separate directories for models, controllers, and routes. This modular approach enhances code maintainability and readability.
2. CRUD Operations with Mongoose:
I gained hands-on experience in implementing CRUD (Create, Read, Update, Delete) operations using Mongoose. This included defining schemas, creating models, and writing controller functions to handle various API endpoints.
3. API Design and Documentation:
I learned the importance of designing RESTful APIs that are intuitive and easy to use. Additionally, I understood the significance of documenting the API endpoints clearly, which helps in better understanding and usage of the API by other developers or users.

## Challenges

**What was the most difficult part of the assignment?**

The most difficult part of the assignment was ensuring that all relationships between entities (Category, Subcategory, Item) were correctly defined and handled. Managing these relationships and ensuring data integrity across different operations, such as creating or updating items with valid references to categories and subcategories, required careful attention to detail.

## Future Improvements

**What you would have done differently given more time?**

Given more time, I would have focused on the following improvements:

1. Enhanced Validation and Error Handling:
Implement more comprehensive validation and error handling mechanisms to ensure that the API is resilient and provides meaningful error messages to the users.
2. Unit and Integration Testing:
Write extensive unit and integration tests to ensure the reliability and correctness of the API endpoints. This would involve using testing frameworks like Mocha and Chai to automate the testing process.
3. Performance Optimization:
Optimize the performance of the API by implementing caching strategies and indexing frequently queried fields in MongoDB. This would help in improving the response times for read operations.
4. API Rate Limiting and Security:
Implement rate limiting to prevent abuse of the API and enhance security measures such as input sanitization, authentication, and authorization to protect the application from potential threats.

