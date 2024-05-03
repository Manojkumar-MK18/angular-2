const router = require("express").Router();
const { GetProducts } = require("./controller");

router.get("/getAllProducts", GetProducts);

module.exports = router;