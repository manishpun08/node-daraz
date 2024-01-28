import express from "express";
import { validateReqBody } from "../middleware/product.middleware.js";
import { addProductSchema } from "./product.validation.js";
import { Product } from "./product.model.js";

const router = express.Router();

// add product
router.post(
  "/product/add",
  validateReqBody(addProductSchema),
  async (req, res) => {
    // extract product from req.body
    const newProduct = req.body;
    // create product
    await Product.create(newProduct);

    return res.status(200).send({ message: "Success" });
  }
);

export default router;
