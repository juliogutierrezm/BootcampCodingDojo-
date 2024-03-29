const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product needs a name"],
        minlength: [3, "Product title should have at least 2 characters"] // Corregido aquí
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price should be a positive value"]
    },
    description: {
        type: String,
        required: [true, "Product needs a description"],
        maxlength: [200, "Description should not exceed 200 characters"] // Corregido aquí
    }
}, {
    timestamps: true
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;


