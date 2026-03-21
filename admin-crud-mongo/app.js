const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const Product = require('./models/Product');

dotenv.config();

const startServer = async () => {
  await connectDB();

  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.urlencoded({ extended: true }));

  // 🔥 seed data Mongo
  const count = await Product.countDocuments();

  if (count === 0) {
    const demoData = [];

    for (let i = 1; i <= 100; i++) {
      demoData.push({
        name: `Sản phẩm ${String(i).padStart(3, '0')}`,
        price: Math.floor(Math.random() * 1000) + 100,
        image:
          'https://simg.zalopay.com.vn/zlp-website/assets/Thuong_hieu_thoi_trang_nu_cao_cap_Hnoss_d2650b4e51.jpg',
        description: `Mô tả sản phẩm ${i}`
      });
    }

    await Product.insertMany(demoData);

    console.log('✅ Đã seed 100 sản phẩm!');
  }

  const productRoutes = require('./routes/productRoutes');

  app.use('/products', productRoutes);

  app.get('/', (req, res) => res.redirect('/products'));

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
};

startServer();