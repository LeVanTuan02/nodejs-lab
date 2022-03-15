import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    view: {
        type: Number,
        default: 0
    },
    status: Number,
    categoryId: Number,
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);