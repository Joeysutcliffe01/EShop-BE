const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const CartSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "UserData",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = model("CartData", CartSchema);

module.exports = Cart;
