# Menu Management API
This Node.js backend server manages a menu, including categories, subcategories, and items. It provides endpoints for CRUD operations and item search.

## Project Overview
This project is a Node.js application built using Express.js and MongoDB. It offers a RESTful API for managing menus in a restaurant or similar setting. The API allows users to create, retrieve, update, and delete categories, subcategories, and items. Additionally, it provides a search endpoint to find items by name.

## Project Setup

### Prerequisites
Node.js (v12.x or higher)
MongoDB (Local or Cloud instance)
Postman (for API testing)

## Installation

Clone the repository:
git clone https://github.com/sombdubey/menu-management.git
cd menu-management
Install dependencies:
npm install

Create a config folder in the root directory and add a default.json file with your MongoDB URI:
{
  "mongoURI": "your_mongodb_connection_string"
}

Start the server:
npm start

## API Endpoints:

### Categories:

**Create Category**
Method: POST
URL: /api/categories
Body:
{
  "name": "Beverages",
  "image": "http://example.com/beverages.jpg",
  "description": "A variety of drinks",
  "taxApplicability": true,
  "tax": 10,
  "taxType": "percentage"
}


**Get All Categories**
Method: GET
URL: /api/categories

**Get Category by ID or Name**
Method: GET
URL: /api/categories/:idOrName

**Edit Category**
Method: PUT
URL: /api/categories/:id
Body:
{
  "name": "Updated Beverages",
  "image": "http://example.com/updated_beverages.jpg",
  "description": "Updated variety of drinks",
  "taxApplicability": true,
  "tax": 12,
  "taxType": "percentage"
}


### Subcategories:

**Create SubCategory**
Method: POST
URL: /api/subcategories
Body:
{
  "category": "Category_ID",
  "name": "Soft Drinks",
  "image": "http://example.com/softdrinks.jpg",
  "description": "Non-alcoholic drinks",
  "taxApplicability": true,
  "tax": 5
}

**Get All SubCategories**
Method: GET
URL: /api/subcategories

**Get SubCategory by ID or Name**
Method: GET
URL: /api/subcategories/:idOrName

**Edit SubCategory**
Method: PUT
URL: /api/subcategories/:id
Body:
{
  "name": "Updated Soft Drinks",
  "image": "http://example.com/updated_softdrinks.jpg",
  "description": "Updated non-alcoholic drinks",
  "taxApplicability": true,
  "tax": 7
}



### Items

**Create Item**
Method: POST
URL: /api/items
Body:
{
  "category": "Category_ID",
  "subCategory": "SubCategory_ID",
  "name": "Coca Cola",
  "image": "http://example.com/cocacola.jpg",
  "description": "Popular soft drink",
  "taxApplicability": true,
  "tax": 2,
  "baseAmount": 50,
  "discount": 5
}

**Get All Items**
Method: GET
URL: /api/items

**Get Item by ID or Name**
Method: GET
URL: /api/items/:idOrName

**Edit Item**
Method: PUT
URL: /api/items/:id
Body:
{
  "name": "Updated Coca Cola",
  "image": "http://example.com/updated_cocacola.jpg",
  "description": "Updated popular soft drink",
  "taxApplicability": true,
  "tax": 3,
  "baseAmount": 60,
  "discount": 10,
  "totalAmount": 50
}

**Search Item by Name**
Method: GET
URL: /api/items/search
Query Param: name
url
/api/items/search?name=Coca Cola


## Database
The project uses MongoDB as its database. MongoDB was chosen for its flexibility and scalability, making it suitable for handling complex data structures like categories, subcategories, and items.

## Inline Comments
Inline comments are provided throughout the codebase to enhance clarity and maintainability. They explain the purpose of functions, variables, and complex logic blocks. Reviewing these comments can help understand the codebase better and make modifications if needed.


## GitHub Repository
The code for this project is hosted on GitHub at your-github-repository-url.

## Running Locally
Follow the steps mentioned in the Installation section to set up the project locally. After installation, you can start the server using npm start. 

## Short Answers
Database: MongoDB was chosen for its flexibility and scalability.
Three things learned:
Implementing CRUD operations in a Node.js application.
Managing relationships between entities in MongoDB.
Enhancing API documentation and testing with Postman.
Most Difficult Part: Managing the relationships between categories, subcategories, and items while ensuring data integrity.
Changes with More Time:
Implement authentication and authorization.
Enhance error handling and validation.
Improve search functionality with advanced filtering options.

## Author
Name: Som Dubey
GitHub: https://github.com/sombdubey
LinkedIn: https://www.linkedin.com/in/somdubey/
