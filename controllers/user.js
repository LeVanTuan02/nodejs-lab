import UserModel from "../models/user";
import { SHA256 } from "crypto-js";

export const login = async (req, res) => {
    const condition = {
        email: req.body.email,
        password: SHA256(req.body.password).toString(),
    };

    try {
        const user = await UserModel.findOne(condition).exec();

        if (user) {
            // loại bỏ password
            const { _doc: { password, ...rest } } = user;
            res.json(rest);
        } else {
            res.status(400).json({
                message: "Tài khoản hoặc mật khẩu không chính xác"
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "Đăng nhập thất bại"
        });
    }
};

export const register = async (req, res) => {
    const userData = {
        ...req.body,
        password: SHA256(req.body.password)
    };

    try {
        const user = await new UserModel(userData).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký tài khoản không thành công"
        });
    }
};