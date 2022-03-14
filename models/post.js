import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: String,
    content: {
        type: String,
        required: true,
    },
    status: Number,
    cateNewId: Number,
    createdAt: {
        type: Date,
        default: new Date().toISOString()
    },
    updatedAt: {
        type: Date,
        default: new Date().toISOString()
    }
});

export default mongoose.model('Post', ProductSchema);