import mongoose from "mongoose";
import connectDB from "./config/db.js";
import Price from "./models/Price.js";
import dotenv from "dotenv";

dotenv.config();
await connectDB();

const sampleData = [
  { productId: 1, value: 19.99, currency_code: "USD" },
  { productId: 2, value: 25.49, currency_code: "USD" },
  { productId: 3, value: 13.49, currency_code: "USD" }
];

await Price.insertMany(sampleData);

console.log("✅ Sample price data inserted");
mongoose.connection.close();
