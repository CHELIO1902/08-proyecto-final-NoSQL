import { Product } from '../models/index.js';


const createProducts = async (req, res) => {
    try {
         const createProduct = await Product.create(req.body);
        return res.json({
            msg: "Product created successfully",
            createProduct,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error creating product",
            error,
        });
    }
};

const getAllproducts = async (_, res) => {
    try {
        const products = await Product.find();
        return res.json({
            msg: "All products found",
            products,
        });
    } catch (error) {
        res.status(500).json({
            msg: "Error getting all products",
            error,
        });
    }
};

const getProductsById = async (req, res) => {
    const { id } = req.params;
    try {
      const getProduct = await Product.findById(id);
      if (!getProduct) {
        return res.status(404).json({
          msg: 'Product not found',
        });
      }
      return res.json({
        msg: 'Product found successfully',
        getProduct,
      });
    } catch (error) {
      res.status(500).json({
        msg: 'Error getting product by id',
        error,
      });
    }
};

const updateProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const productUpdate = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.json({
            msg: `Product updated successfully`,
            productUpdate,
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error updating product',
          });
    }
     
};

const deleteProductById = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndRemove(id);
        return res.json({
            msg: 'Product deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error deleting product',
        });
    }
};

export { 
    createProducts,
    getAllproducts, 
    getProductsById, 
    updateProductById,
    deleteProductById 
};