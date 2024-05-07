const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: String,
    image: String,
    rating: Number,
});

module.exports = {
    productSchema: mongoose.model("product", ProductSchema, "product"),
};