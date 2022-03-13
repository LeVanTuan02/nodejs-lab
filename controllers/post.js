import PostModel from "../models/post";

export const create = async (req, res) => {
    try {
        const post = await new PostModel(req.body).save();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Thêm bài viết không thành công"
        });
    }
};

export const read = async (req, res) => {
    try {
        const post = await PostModel.findOne({ _id: req.params.id }).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy bài viết"
        });
    }
};

export const list = async (req, res) => {
    try {
        const posts = await PostModel.find().exec();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Không có bài viết nào"
        });
    }
};

export const remove = async (req, res) => {
    try {
        const post = await PostModel.findByIdAndDelete({ _id: req.params.id }).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Xóa bài viết thất bại"
        });
    }
};

export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const update = req.body;

    try {
        const post = await PostModel.findByIdAndUpdate(condition, update, { new: true }).exec();
        res.json(post);
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật bài viết thất bại"
        });
    }
};

export const search = async (req, res) => {
    const arrQuery = Object.keys(req.query);
    let filter = {};

    if (arrQuery.length) {
        for (let item of arrQuery) {
            if (item.includes("like")) {
                filter[item.slice(0, item.indexOf("_"))] = new RegExp(req.query[item], "i");
            } else {
                filter[item] = req.query[item];
            }
        }
    }

    try {
        const posts = await PostModel.find(filter).exec();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy bài viết nào"
        });
    }
};