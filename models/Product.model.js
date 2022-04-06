const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const ProductSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      require: true
    },
    price:{
      type:String,
      unique: true,
      required: true
    },
    description:{
      type:String,
      required: true
    },
    image:{
        type:String,
        required: true
      }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const ProductInformation = model("productData", ProductSchema);

module.exports = ProductInformation;