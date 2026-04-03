const express = require('express');													
const session = require('express-session');													
require('dotenv').config();													
const connectDB = require('./config/db');										
													
const app = express();													
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => 
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
};							
app.set('view engine', 'ejs');													
app.use(express.urlencoded({ extended: true }));													
app.use(express.json());													
													
app.use(session({													
  secret: 'supersecretkey',													
  resave: false,													
  saveUninitialized: true													
}));													
													
const userRoutes = require('./routes/userRoutes');													
// const productRoutes = require('./routes/productRoutes');													
													
app.use('/users', userRoutes);													
// app.use('/products', productRoutes);													
													
app.get('/', (req, res) => res.redirect('/users/login'));													
													
const PORT = process.env.PORT || 3000;																								
startServer();