const User = require('../model/registerModel');

exports.registerUser = async (req, res) => {
    try {
      const { password, confirmedPassword, ...userData } = req.body;
  
      if (password !== confirmedPassword) {
        return res.status(400).json({ error: "Passwords don't match" });
      }
      console.log("first")
     
      const newUser = new User({password,...userData});
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    }
     catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Registration failed' });
    }
  };
  
  exports.loginUser = async (req, res) => {
    try {
      const { password, email } = req.body;
  
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
  
      if (!password) {
        return res.status(400).json({ message: 'Password is required' });
      }
  
      const existUser = await User.findOne({ email });
      const existPassword = await User.findOne({ password });
  
  
      if (!existUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (!existPassword) {
        return res.status(404).json({ message: 'password not found' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Again try' });
    }
  };

  
exports.getAllUSers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "user is not present" });
  }
};

exports.deleteUSer = async (req, res) => {
  try {
    const userId =  req.params.id;
    const deleteUSer = await User.findOneAndDelete({ _id: userId });
    if (!deleteUSer) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json("User is deleted successfully");
  } catch (error) {
    res.status(500).json({ error: "Internal server" });
  }
};