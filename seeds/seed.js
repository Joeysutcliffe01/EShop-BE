const ProductInformation = require("../allProducts/allProducts"); // the DroneModel will be used to create new drones in our DB

const mongoose = require("mongoose");

require("../db/index.js"); // this will execute the DB connection file
const ProductModel = require("../models/Product.model.js"); // this will require the model that we will use to insert the drones to the DB
// drones to be added

// .insertMany mongoose method to add an array of several elements to DB
ProductModel.create(ProductInformation)
  .then((addedProduct) => {
    addedProduct.forEach((eachProduct) => console.log(eachProduct.title)); // to console.log each added drone name
    // to close the DB after data insertion
    mongoose.connection
      .close()
      .then(() => console.log("Database closed"))
      .catch((err) => console.log("Error closing DB", err));
  })
  .catch((err) => {
    console.log("Error with mongoose method", err);
  });
