const { productSchema } = require("./schema");

module.exports = {
    GetProducts: async(req, res) => {
        try {
            let result = await productSchema.find({});
            return res.status(200).json({
                status: true,
                message: result,
            });
        } catch (err) {
            console.log(err, "==>err");
            return res.status(500).json({
                status: false,
                message: err,
            });
        }
    },

    AddProduct: async(req, res) => {
        const data = req.body;
        try {
            let newProduct = productSchema({
                name: data.name,
                price: data.price,
                image: data.image,
                rating: data.rating,
            });
            console.log(newProduct);
            await newProduct.save();
            return res.status(200).json({
                status: true,
                message: "added",
            });
        } catch (err) {
            console.log(err, "==>err");
            return res.status(500).json({
                status: false,
                message: err,
            });
        }
    },
};