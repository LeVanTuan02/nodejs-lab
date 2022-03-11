// import express from 'express';
// const router = express.Router();
import { check } from "../middlewares/checkAuth";
import { Router } from 'express';
const postRouter = Router();

postRouter.get("/", (req, res) => {
    res.send("Hello Tuan Nek");
});

postRouter.get("/product/:id", (req, res) => {
    const products = [
        {
            id: 1, name: "Trà sữa"
        },
        {
            id: 2, name: "Trà chanh"
        }
    ];

    const product = products.find(item => item.id === +req.params.id);

    res.json(product);
})

postRouter.get("/api/products", check, (req, res) => {
    res.json([
        {
            id: 1, name: "Trà sữa"
        },
        {
            id: 2, name: "Trà chanh"
        }
    ])
});

postRouter.post("/api/products", check, (req, res) => {
    const products = [
        {
            id: 1, name: "Trà sữa"
        },
        {
            id: 2, name: "Trà chanh"
        }
    ];

    products.push(req.body);
    console.log(req.body);
    res.json(products);

});

postRouter.delete("/product/:id", (req, res) => {
    const products = [
        {
            id: 1, name: "Trà sữa"
        },
        {
            id: 2, name: "Trà chanh"
        },
        {
            id: 3, name: "Trà chanh"
        }
    ];
    res.json(products.filter(item => item.id !== +req.params.id));
})

export default postRouter;