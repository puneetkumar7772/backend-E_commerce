const seller = require('../model/sellerregisterModel');

exports.registerSeller = async (req, res) => {
    try {
      const { password, confirmedPassword, SellerID,...sellerData } = req.body;
  
      if (password !== confirmedPassword) {
        return res.status(400).json({ error: "Passwords don't match" });
      }
      console.log("first")
     
      const newSeller = new seller({password,SellerID,...sellerData});
      await newSeller.save();
  
      res.status(201).json({ message: 'Seller registered successfully' });
    }
     catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Registration failed' });
    }
  };

  exports.sellerLogin = async (req, res) => {
    try {
      const { password, SellerID } = req.body;
  
      if (!SellerID) {
        return res.status(400).json({ message: 'SellerId  is required' });
      }
  
      if (!password) {
        return res.status(400).json({ message: 'Password is required' });
      }
  
      const existSeller = await seller.findOne({ SellerID });
      const existPassword = await seller.findOne({ password });
  
  
      if (!existSeller) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      if (!existPassword) {
        return res.status(404).json({ message: 'password not found' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Again try' });
    }
  };

  exports.getAllSeller = async (req, res) => {
    try {
      const sellers = await seller.find()
      res.status(200).json(sellers);
    } catch (error) {
      res.status(500).json({ error: "seller is not present" });
    }
  };

  exports.deleteSeller = async (req, res) => {
    try {
      const sellerId =  req.params.id;
      const deleteSeller = await seller.findOneAndDelete({ _id: sellerId });
      if (!deleteSeller) {
        return res.status(404).json({ error: "seller not found" });
      }
      res.status(200).json("Seller is deleted successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal server" });
    }
  };