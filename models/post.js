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
}, { timestamps: true });

export default mongoose.model('Post', ProductSchema);