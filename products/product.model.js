import mongoose from "mongoose";

// set rules
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    maxlength: 55,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// create table
export const Product = mongoose.model("Product", productSchema);
