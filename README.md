🍽️ Burak Restaurant - Admin Backend & API

This is the Backend Server and Admin Panel for the Burak Restaurant Application. It provides the REST API endpoints for the client-side app and serves the server-side rendered (SSR) Admin Dashboard for restaurant management.

🏗️ Project Architecture

This project follows the MVC (Model-View-Controller) pattern to separate business logic, data, and the user interface.

Description

src/controllers
Contains logic to handle requests for Orders, Products, and Users.

<img width="959" height="173" alt="image" src="https://github.com/user-attachments/assets/0dc80589-a361-46b9-bbf7-e35fa0346812" />


src/models
Service models defining the business logic.

<img width="951" height="180" alt="image" src="https://github.com/user-attachments/assets/b2b4967d-bfb3-4e81-b188-0cd4ee9b36da" />


src/schema
Database models (Schema Models) defining the structure of data.

<img width="957" height="173" alt="image" src="https://github.com/user-attachments/assets/fd6b9792-a753-4c9a-8ed6-542593356258" />


src/views
EJS templates for the Admin Dashboard UI.

<img width="956" height="253" alt="image" src="https://github.com/user-attachments/assets/314aece7-e743-4559-b1c5-27133f637bc8" />


src/router.ts
Main API routes for the customer-facing mobile/web app.

src/router-Admin.ts
Protected routes specifically for the Admin Panel.

src/server.ts
Entry point that initializes the server and database connection.

✨ Key Features
👑 Admin Dashboard (Web)

Product Management: Create, update, and delete menu items (images, prices, categories).

<img width="1906" height="909" alt="image" src="https://github.com/user-attachments/assets/887b645b-b895-4d6d-aa74-bf6f37d006e4" />


User Management: View registered users and manage their access levels.

<img width="1920" height="696" alt="image" src="https://github.com/user-attachments/assets/04ccc2c8-485a-4961-b557-ac2dfb90d09c" />


🚀 REST API (Backend)

Order Processing:

POST /createOrder: Receive new orders from the frontend.
POST /updateOrder: Update status (Pending → Cooking → Ready → Delivery).


Member System:
POST /updateMember: Handle user profile updates.
POST /updateChosenUser: Admin logic to modify specific user data.

Authentication: Secure login for admins and token verification for API requests.


🛠️ Tech Stack

Runtime: Node.js
Language: TypeScript
Framework: Express.js
Database: MongoDB (with Mongoose)
Template Engine: EJS (for Admin UI views)
Authentication: JWT & Sessions

🚀 Getting Started

Follow these steps to set up the backend server locally.

1. Prerequisites

Node.js (v14 or higher)
MongoDB (Local or Atlas URL)

2. Installation

# Clone the repository
git clone [https://github.com/shox17/burak.git](https://github.com/shox17/burak.git)

# Navigate to the directory
cd burak

# Install dependencies
npm install


3. Environment Setup

Create a .env file in the root directory and add your credentials:

PORT=3001
MONGO_URL=mongodb+srv://your_connection_string
SESSION_SECRET=your_secret_key


4. Running the Server

# Development mode (with hot reload)
npm run dev

# Production build
npm run build
npm start


Commit your changes.

Push to the branch and open a Pull Request.

Developed by: [Your Name]
