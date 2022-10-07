import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    barCode : {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    costPrice: {
        type: Number,
        required: true,
        min: 0
    },
    salePrice: {
        type: Number,
        required: true,
        min: 0
    }
})

export default mongoose.model('Product', productSchema);