import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: String,
    thumbnail: String,
    content: String,
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