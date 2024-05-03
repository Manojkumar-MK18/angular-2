const mongoose = require("./config");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_name: String,
});

module.exports = {
    productSchema: mongoose.model("product", ProductSchema, "product"),
};