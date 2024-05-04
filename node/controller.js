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
};