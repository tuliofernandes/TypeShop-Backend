import connectDb from '../config/db';
import Product from '../models/productModel';
import products from './products';
import dotenv from 'dotenv';
dotenv.config();


// connectDb();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

connectDb().then(importData)
