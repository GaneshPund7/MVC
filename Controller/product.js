const ProductModal = require('../Modal/product');

async function getProduct(req, res) {
    try {
        const getProduct = await ProductModal.find();
        return res.status(200).json(getProduct);

    } catch (error) {
        return res.status(500).send("Somthing went wrong");
    }
}

async function addProduct(req, res) {
    try {
        let addProduct = ProductModal.create(req.body);
        res.status(200).json(addProduct)

    } catch (error) {
        return res.status(500).send("Somthing went wrong");
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const updateProduct = await ProductModal.findOneAndUpdate(id, { productName });
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(404).json(error.message);
    }
}

const deleteProduct = async (req, res) => {

    const { id } = req.params;

    await ProductModal.findByIdAndDelete(id);
    return res.status(200).send("Product deleted successfully..!");
}

module.exports = { getProduct, addProduct, updateProduct, deleteProduct }
