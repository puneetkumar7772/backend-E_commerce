const Product = require('../model/addProduct');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { productName, ...productData } = req.body;
    console.log("6565555")
    const newProduct = new Product({productName,...productData});
    await newProduct.save();
    console.log("sdddddddddd",newProduct)
    res.status(201).json({ message: 'product add successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
