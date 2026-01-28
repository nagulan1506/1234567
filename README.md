# Recipes App

A complete CRUD application for managing recipes using Node.js, Express.js, and Mongoose.

## Features

- Create a new recipe
- Retrieve all recipes
- Retrieve a single recipe by ID
- Update a recipe by ID
- Delete a recipe by ID

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/recipes-app
   ```
   (Replace `MONGODB_URI` with your actual MongoDB connection string if different)

### Running the App

- Development mode:
  ```bash
  npm run dev
  ```
- Production mode:
  ```bash
  npm start
  ```

## API Documentation

Base URL: `http://localhost:5000/api/recipes`

### 1. Create a Recipe

- **Endpoint:** `POST /`
- **Description:** Create a new recipe.
- **Request Body:**
  ```json
  {
    "title": "Pasta Carbonara",
    "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
    "instructions": "Boil pasta. Fry pancetta. Mix eggs and cheese. Combine all.",
    "cookingTime": 20,
    "servings": 2
  }
  ```
- **Response (201 Created):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d0fe4f5311236168a109ca",
      "title": "Pasta Carbonara",
      "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
      "instructions": "Boil pasta. Fry pancetta. Mix eggs and cheese. Combine all.",
      "cookingTime": 20,
      "servings": 2,
      "createdAt": "2021-06-21T10:00:00.000Z",
      "__v": 0
    }
  }
  ```

### 2. Get All Recipes

- **Endpoint:** `GET /`
- **Description:** Retrieve all recipes.
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "count": 1,
    "data": [
      {
        "_id": "60d0fe4f5311236168a109ca",
        "title": "Pasta Carbonara",
        "ingredients": ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
        "instructions": "Boil pasta. Fry pancetta. Mix eggs and cheese. Combine all.",
        "cookingTime": 20,
        "servings": 2,
        "createdAt": "2021-06-21T10:00:00.000Z",
        "__v": 0
      }
    ]
  }
  ```

### 3. Get Recipe by ID

- **Endpoint:** `GET /:id`
- **Description:** Retrieve a single recipe by ID.
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d0fe4f5311236168a109ca",
      "title": "Pasta Carbonara",
      // ... other fields
    }
  }
  ```
- **Response (404 Not Found):**
  ```json
  {
    "success": false,
    "error": "Recipe not found"
  }
  ```

### 4. Update Recipe

- **Endpoint:** `PUT /:id`
- **Description:** Update a recipe by ID.
- **Request Body:** (Partial updates allowed)
  ```json
  {
    "cookingTime": 25
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {
      "_id": "60d0fe4f5311236168a109ca",
      "title": "Pasta Carbonara",
      "cookingTime": 25,
      // ... other updated fields
    }
  }
  ```

### 5. Delete Recipe

- **Endpoint:** `DELETE /:id`
- **Description:** Delete a recipe by ID.
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "data": {},
    "message": "Recipe deleted successfully"
  }
  ```

## Deployment

To deploy on Render:
1. Create a new Web Service on Render.
2. Connect your GitHub repository.
3. Set the build command to `npm install`.
4. Set the start command to `npm start`.
5. Add environment variables (like `MONGODB_URI`).

## License

This project is open-source.
