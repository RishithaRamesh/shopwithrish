// we use the model we created in models/Product.js
require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({}); // delete everything in current db
    await Product.insertMany(productData); //insert evrything in data/products.js- line 4

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();