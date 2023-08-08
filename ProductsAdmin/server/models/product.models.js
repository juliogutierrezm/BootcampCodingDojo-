const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product needs a name"],
        minLength: [3, "Product title should have at least 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price should be a positive value"]
    },
    description: {
        type: String,
        required: [true, "Product needs a description"],
        maxLength: [200, "Description should not exceed 200 characters"]
    }
}, {
    timestamps: true
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;



