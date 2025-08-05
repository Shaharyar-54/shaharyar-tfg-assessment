import axios from "axios";
import Price from "../models/Price.js";

export const getProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    const productRes = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    const priceData = await Price.findOne({ productId });

    if (!priceData) {
      return res.status(404).json({ error: "Price not found" });
    }

    res.json({
      id: productId,
      title: productRes.data.title,
      current_price: {
        value: priceData.value,
        currency_code: priceData.currency_code
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePrice = async (req, res) => {
  try {
    const productId = req.params.id;
    const { value, currency_code } = req.body;

    const updatedPrice = await Price.findOneAndUpdate(
      { productId },
      { value, currency_code },
      { upsert: true, new: true }
    );

    res.json({ message: "Price updated successfully", updatedPrice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
