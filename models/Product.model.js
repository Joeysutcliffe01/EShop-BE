const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const ProductSchema = new Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Product = model("productData", ProductSchema);

module.exports = Product;
