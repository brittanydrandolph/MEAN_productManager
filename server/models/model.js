const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Product must have a name"], minlength: 4},
    price: {type: Number, required: [true, "Product must have a price"], min: 0},
    image: {type: String}
},{timestamps: true});

// const reviewSchema = new mongoose.Schema({

// })

    const Product = mongoose.model("Products", productSchema);
    module.exports = Product