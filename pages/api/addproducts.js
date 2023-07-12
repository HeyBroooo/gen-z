import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const products = req.body.map((productData) => {
        return new Product({
          title: productData.title,
          slug: productData.slug,
          desc: productData.desc,
          img: productData.img,
          category: productData.category,
          size: productData.size,
          color: productData.color,
          price: productData.price,
          availableQty: productData.availableQty,
        });
      });

      await Product.insertMany(products);

      res.status(200).json({ success: "Products saved successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to save products" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
