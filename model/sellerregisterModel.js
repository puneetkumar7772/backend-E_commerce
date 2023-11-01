const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  Name:{
    type:String,
    required:true
  } , 
  SellerID:{
    type:String,
  } , 
  email:{
    type:String,
    required:true
  },
  password: {
    type:String,
    required:true
  },  
  confirmedPassword:{
    type:String,
  
  }  
});
const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;