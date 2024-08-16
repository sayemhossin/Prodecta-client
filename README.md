# Product Management Single Page Application

## Live Link
[Live Website Link](https://prodecta-3aa53.web.app)

## Overview
This project is a full-stack Single Page Application (SPA) developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The application allows users to search, filter, categorize, sort, and paginate through a list of products. Authentication is implemented using Firebase for Google and Email/Password authentication.

## Features
1. **Pagination**: Efficient loading of products with navigation buttons.
2. **Searching**: Search products based on product name.
3. **Categorization**: Filter products by Brand Name, Category Name, and Price Range.
4. **Sorting**: Sort products by Price (Low to High, High to Low) and Date Added (Newest First).
5. **Authentication**: Google and Email/Password authentication using Firebase.
6. **Responsive Design**: Mobile-first design with fully responsive UI.

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Firebase Account

### Installation

#### Backend

1. **Clone the Backend Repository**:
    ```bash
    git clone
    cd backend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_uri
    PORT=your_port
    ```

4. **Run the Backend Server**:
    ```bash
    npm start
    ```

#### Frontend

1. **Clone the Frontend Repository**:
    ```bash
    git clone
    cd frontend
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Firebase Configuration**:
    Create a `.env` file in the root directory and add the Firebase configuration:
    ```env
    REACT_APP_API_KEY=your_firebase_api_key
    REACT_APP_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_PROJECT_ID=your_firebase_project_id
    REACT_APP_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_APP_ID=your_firebase_app_id
    ```

4. **Run the Frontend Application**:
    ```bash
    npm start
    ```

## Usage

### Adding Products
- Insert dummy product data manually into the MongoDB database.
- Alternatively, you can create an API endpoint to add product data programmatically.

### Authentication
- Sign up or log in using Google or Email/Password authentication.

### Product Operations
- **Search**: Use the search bar to find products by name.
- **Filter**: Use the filter options to categorize products by Brand Name, Category Name, and Price Range.
- **Sort**: Sort products by Price or Date Added.
- **Pagination**: Navigate through the product list using pagination controls.




