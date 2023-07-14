// const mongoose = require("mongoose");
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
  },
  { timestamps: true }
);

 let Product;
mongoose.model = {}

 try {
     // Check if the model is already defined
   Product = mongoose.model("Product");
 } catch (error) {
//   // Define the model if it's not already defined
   Product = mongoose.model("Product", ProductSchema);
 }

 module.exports = Product;
export default mongoose.model("Product", ProductSchema);
