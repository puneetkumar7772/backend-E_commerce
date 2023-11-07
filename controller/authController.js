const adminEmail = 'puneetkumar@gmail.com';
const adminPassword = 'pun123';

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === adminEmail && password === adminPassword) {
    res.status(200).json({ message: 'Admin logged in successfully' });
    console.log("first")
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
