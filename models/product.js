import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    view: Number,
    status: Number,
    categoryId: Number,
    createdAt: {
        type: Date,
        default: new Date().toISOString()
    },
    updatedAt: {
        type: Date,
        default: new Date().toISOString()
    }
});

export default mongoose.model('Product', ProductSchema);