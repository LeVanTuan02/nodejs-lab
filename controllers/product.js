import ProductModel from "../models/product";

export const create = async (req, res) => {
    try {
        const product = await new ProductModel(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        });
    }
};

export const read = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm"
        });
    }
};

export const list = async (req, res) => {
    try {
        const product = await ProductModel.find().exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Không có sản phẩm nào"
        });
    }
};

export const remove = async (req, res) => {
    try {
        const product = await ProductModel.findByIdAndDelete({ _id: req.params.id }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm thất bại"
        });
    }
};

export const update = async (req, res) => {
    const condition = { _id: req.params.id };
    const update = req.body;

    try {
        const product = await ProductModel.findByIdAndUpdate(condition, update, { new: true }).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật sản phẩm thất bại"
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
        const products = await ProductModel.find(filter).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Không tìm thấy sản phẩm nào"
        });
    }
};