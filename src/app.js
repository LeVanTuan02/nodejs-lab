import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

import productRouter from '../routes/product';
import postRouter from '../routes/post';

// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.setHeader("Content-Type", "text/html");
//         res.write("Hello Tuan Nek");
//         res.end();
//     } else if (req.url === "/api/products") {
//         const products = [
//             {
//                 id: 1,
//                 name: "Trà sữa 1"
//             },
//             {
//                 id: 2,
//                 name: "Trà chanh"
//             }
//         ];

//         res.setHeader("Content-Type", "application/json, charset=utf8");
//         res.end(JSON.stringify(products));
//     } else {
//         console.log("Page gì đó");
//     }
// });

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny')); // logger
app.use(express.json());

// route
app.use("/api", productRouter);
app.use("/api", postRouter);

// connect db
mongoose.connect("mongodb://localhost:27017/we16309")
    .then(() => console.log("Kết nối thành công"))
    .catch(error => console.log(error));

// connection
const PORT = "3001";
app.listen(PORT, () => console.log(`Server is running port: ${PORT}`));