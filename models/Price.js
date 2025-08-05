import mongoose from "mongoose";

const PriceSchema = new mongoose.Schema({
  productId: { type: Number, required: true, unique: true },
  value: { type: Number, required: true },
  currency_code: { type: String, default: "USD" }
});

export default mongoose.model("Price", PriceSchema);
