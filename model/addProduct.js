const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discountPercentage: { type: Number },
  productSize: { type: String },
  brandName: { type: String },
  productDescription: { type: String },
  shopName: { type: String },
  ratings: { type: Number },
  shopAddress: { type: String },
  images: [
    { type: String } // Store URLs or file paths for images
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
