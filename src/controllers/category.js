import CategoryModel from "../models/category";
import ProductModel from "../models/product";

export const create = async (req, res) => {
    try {
        const category = await new CategoryModel(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({error});
    }
};

export const list = async (req, res) => {
    try {
        const category = await CategoryModel.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({error});
    }
}

export const read = async (req, res) => {
    try {
        const category = await CategoryModel.findOne({ _id: req.params.id }).exec();
        const product = await ProductModel.find({ category }).select("-category").exec();
        res.json({
            category,
            product
        });
    } catch (error) {
        res.status(400).json({error});
    }
};

export const update = async (req, res) => {
    try {
        const condition = { _id: req.params.id };
        const update = req.body;
        const option = { new: true };

        const category = await CategoryModel.findOneAndUpdate(condition, update, option).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({error});
    }
}

export const remove = async (req, res) => {
    try {
        const category = await CategoryModel.findOneAndRemove({ _id: req.params.id }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({error});
    }
}