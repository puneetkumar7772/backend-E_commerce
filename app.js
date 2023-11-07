const express=require('express')
const dotenv = require("dotenv").config()
const mongoose=require('mongoose')
const db=require('./database/db')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const produtRoutes = require('./routes/productRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(cors());

app.use('/ecommerce/', authRoutes);
app.use('/ecommerce', produtRoutes);
app.use('/ecommerce/', userRoutes);
app.use('/ecommerce/', sellerRoutes);

app.listen(port, () => {
 console.log(`Server is running on port`);
});