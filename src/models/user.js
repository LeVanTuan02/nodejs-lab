import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: String,
    role: {
        type: Number,
        default: 0
    },
    active: Number,
    phone: String,
}, { timestamps: true });

export default mongoose.model("User", UserModel);