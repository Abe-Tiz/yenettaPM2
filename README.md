<h1>Product Managment System</h1>
This is a product management system built with React.js, Node.js, and MySQL. It allows you to manage products by performing CRUD (Create, Read, Update, Delete) operations. Follow the instructions below to run the application locally.

## Prerequisites

Before getting started, ensure you have the following installed:

- [Node.js](https://nodejs.org) - version X.X.X or higher
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - package manager
- [MySQL](https://www.mysql.com/) - relational database

## Backend Setup

1. Clone this repository to your local machine.
2. Navigate to the `backend` directory: `cd backend`.
3. Install the dependencies: `npm install` or `yarn install`.
    
 Replace `your_mysql_username` and `your_mysql_password` with your MySQL credentials.

5. Import the `productInventory.sql` file located in the `backend` directory into your MySQL database to create the necessary tables and sample data.
6. Start the backend server: `node route.js`.
7. The backend server will be running at `http://localhost:4000`.

## Frontend Setup

1. In a separate terminal, navigate to the `frontend` directory: `cd frontend`.
2. Install the dependencies: `npm install` or `yarn install`.
3. Start the frontend development server: `npm start` or `yarn start`.
4. The frontend application will be running at `http://localhost:3000`.

## Accessing the Application

Once both the backend and frontend servers are running, open your web browser and visit `http://localhost:3000` to access the product management system.

## Additional Configuration

- The backend server is configured to connect to the MySQL database using the provided environment variables. Make sure you have MySQL installed and running, and provide the correct credentials.
- You can modify the frontend code in the `frontend/src` directory to customize the UI or add additional features.
- If you encounter any issues or need further assistance, please [create an issue](https://github.com/Abe-Tiz/yenettaPM2/issues) on this repository.

## System Screenshots 

## Home page 
<img width="943" alt="home" src="https://github.com/Abe-Tiz/yenettaPM2/assets/106752541/42cfbb5d-e345-4d0e-a810-41282d777cbf" />

## Available Products page
<img width="861" alt="available product" src="https://github.com/Abe-Tiz/yenettaPM2/assets/106752541/5c636b2c-66ea-44d6-afb2-dd57772eedb4" />

## Out of stock Products page
<img width="911" alt="out of stock product" src="https://github.com/Abe-Tiz/yenettaPM2/assets/106752541/a37a8ce9-00fb-48aa-8a40-7942f63b344b" />

## product add page
<img width="857" alt="product add page" src="https://github.com/Abe-Tiz/yenettaPM2/assets/106752541/bddbb2af-337d-44d3-a235-5f422ff5b80d" />

## product update page
<img width="796" alt="update" src="https://github.com/Abe-Tiz/yenettaPM2/assets/106752541/7c54f947-e020-49ea-838b-e300d40dae5f" />
  
