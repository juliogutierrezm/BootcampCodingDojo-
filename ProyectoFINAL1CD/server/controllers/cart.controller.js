const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const CartModel = require("../models/cart.models");

module.exports = {
getAllProductsCart: (req, res) => {
    CartModel.find(
      {},
      { _id: true, name: true, price: true, description: true, image: true, quantity: true, number: true }
    )
      .then((products) => {
        res.json({ data: products });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
  createProductCart: (req, res) => {
    let data = req.body;
    CartModel.create(data)
      .then((product) => {
        res.json({ data: product });
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          let keys = Object.keys(error.errors);
          let error_dict = {};
          keys.map((key) => {
            error_dict[key] = error.errors[key].message;
          });
          res.status(500).json({ error: error_dict });
        } else {
          res.status(500).json({ error: error });
        }
      });
  },
  
  getOneProductCart: (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id))
      return res
        .status(400)
        .json({ message: "id doesn't match the expected format" });
    CartModel.find({ _id: id })
      .then((product) => {
        res.json({ data: product });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
  deleteProductCart: (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id))
      return res
        .status(400)
        .json({ message: "id doesn't match the expected format" });
    CartModel.deleteOne({ _id: id })
      .then(() => {
        res.json({ success: true });
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  },
  updateProductCart: (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };
    if (!ObjectId.isValid(id))
      return res
        .status(400)
        .json({ message: "id doesn't match the expected format" });
    ProductModel.findByIdAndUpdate({ _id: id }, data, updateOptions)
      .then(() => {
        res.json({ success: true });
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          let keys = Object.keys(error.errors);
          let error_dict = {};
          keys.map((key) => {
            error_dict[key] = error.errors[key].message;
          });
          res.status(500).json({ error: error_dict });
        } else {
          res.status(500).json({ error: error });
        }
      });
  },
}