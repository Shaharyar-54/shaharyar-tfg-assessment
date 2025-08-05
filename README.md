# 🛒 myStore RESTful Service

## 📌 Overview
This project is a RESTful API service that retrieves product details from an **external API** ([FakeStore API](https://fakestoreapi.com/)) and pricing information from a **MongoDB Atlas** database.  
It also supports updating the product price in the database.

## 🚀 Features
- **GET /products/:id** → Fetch product title from FakeStore API & price from MongoDB Atlas.
- **PUT /products/:id** → Update product price in MongoDB Atlas.
- Built with **Node.js, Express, MongoDB Atlas, and Axios**.

## 🛠 Tech Stack
- **Backend Framework:** Node.js + Express
- **Database:** MongoDB Atlas (Mongoose ORM)
- **HTTP Client:** Axios
- **Environment Variables:** dotenv

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
Create a .env file in the root folder
MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000
npm run seed
npm start

