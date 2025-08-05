import express from "express";
import { getProduct, updatePrice } from "../controllers/productController.js";

const router = express.Router();

router.get("/:id", getProduct);
router.put("/:id", updatePrice);

export default router;
