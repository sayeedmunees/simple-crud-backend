const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from API Server");
});

app.get("/api/products/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://sayeedmunees0_db_user:nVfDE7JwzTU32rrV@backenddb.li01xoq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log("Connection failed");
  });
