const express = require('express');

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

const check = (req, res, next) => {
    const status = true;

    if (status) {
        console.log("Hello bro");
        next();
    } else {
        console.log("Té ngay");
    }
}

// app.use(check);

app.get("/", (req, res) => {
    res.send("Hello Tuan Nek");
});

app.get("/api/products", check, (req, res) => {
    res.json([
        {
            id: 1, name: "Trà sữa"
        },
        {
            id: 2, name: "Trà chanh"
        }
    ])
})

app.get("/product/:id", (req, res) => {
    res.send({
        id: req.params.id
    })
});

const PORT = "3001";
app.listen(PORT, () => console.log(`Server is running port: ${PORT}`));