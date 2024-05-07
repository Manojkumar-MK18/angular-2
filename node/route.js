const router = require("express").Router();
const { GetProducts, AddProduct } = require("./controller");

router.get("/getAllProducts", GetProducts);
router.post("/addProduct", AddProduct);

module.exports = router;