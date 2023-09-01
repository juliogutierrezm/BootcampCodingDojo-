const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product needs a name"],
      minlength: [3, "Product title should have at least 2 characters"], // Corregido aquí
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price should be a positive value"],
    },
    image: { type: String,
      required: [true, "Image is required"],
    },
    quantity: {
      type: Number,
      min: [0, "Month quantity should be a positive value"],
    },
    description: {
      type: String,
      required: [true, "Product needs a description"],
      maxlength: [500, "Description should not exceed 200 characters"], // Corregido aquí
    },
    number: {
      type: Number,
      min: [0, "Product quantity should be a positive value"],
    },
  },
  {
    timestamps: true,
  }
);

const CartModel = mongoose.model("Cart", CartSchema);

module.exports = CartModel;
