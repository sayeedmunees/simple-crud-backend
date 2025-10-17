const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from API Server");
});

api.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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
