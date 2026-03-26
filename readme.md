Inventory Management API

A simple RESTful API to manage inventory items, with full CRUD support, validation, and duplicate checks.

Features
.Get all items with optional filters
.Get a single item by ID
.Add a new item
.Replace an item fully (PUT)
.Update an item partially (PATCH)
.Delete an item by ID
.Validation middleware:
.Required fields for POST and PUT
.Field type checks
.Duplicate name check
.Invalid characters check
.Non-negative numbers for quantity & price



Install dependencies:

npm install


Start the server:

npm start




By default, the server runs on http://localhost:5000
.

API Routes
Get all items

GET /api/inventory

Optional query parameters:

name — filter by name (partial match)
category — filter by category (exact match)
quantity — filter by quantity (exact match)

Response:

{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "name": "Rice",
      "category": "Grains",
      "quantity": 50,
      "price": 40,
      "supplier": "ABC Foods"
    }
  ]
}

Get single item

GET /api/inventory/:id

Response:

{
  "success": true,
  "data": {
    "id": 1,
    "name": "Rice",
    "category": "Grains",
    "quantity": 50,
    "price": 40,
    "supplier": "ABC Foods"
  }
}

Add new item

POST /api/inventory

Body:

{
  "name": "Oil",
  "category": "Spices",
  "quantity": 30,
  "price": 100,
  "supplier": "SpiceCo"
}


Response:

{
  "success": true,
  "data": {
    "id": 6,
    "name": "Oil",
    "category": "Spices",
    "quantity": 30,
    "price": 100,
    "supplier": "SpiceCo"
  }
}

Replace item (full update)

PUT /api/inventory/:id

Body: (all fields required)

{
  "name": "Rice Premium",
  "category": "Grains",
  "quantity": 60,
  "price": 50,
  "supplier": "ABC Foods"
}


Response:

{
  "success": true,
  "data": {
    "id": 1,
    "name": "Rice Premium",
    "category": "Grains",
    "quantity": 60,
    "price": 50,
    "supplier": "ABC Foods"
  }
}

Duplicate name validation is applied for PUT.

Update item (partial update)

PATCH /api/inventory/:id

Body: (only fields to update)

{
  "price": 55
}


Response:

{
  "success": true,
  "data": {
    "id": 1,
    "name": "Rice Premium",
    "category": "Grains",
    "quantity": 60,
    "price": 55,
    "supplier": "ABC Foods"
  }
}

Delete item

DELETE /api/inventory/:id

Response:

{
  "success": true,
  "message": "Item deleted",
  "data": {
    "id": 6,
    "name": "Oil",
    "category": "Spices",
    "quantity": 30,
    "price": 100,
    "supplier": "SpiceCo"
  }
}

Project Structure
project-folder/
├─ model/
│  └─ inventoryData.js      
├─ controllers/
│  └─ inventoryController.js
├─ middleware/
│  └─ validation.js
├─ routes/
│  └─ inventoryRoutes.js
├─ server.js                
└─ package.json

Dependencies
express
nodemon 

Start server:

npm start


Test API using Postman.