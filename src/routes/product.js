import { checkAuth } from "../middlewares/checkAuth";
import { Router } from 'express';
import { read, list, create, remove, update, search } from "../controllers/product";
const productRouter = Router();

productRouter.get("/product/:id", checkAuth, read);
productRouter.get("/products/search", search);
productRouter.get("/products", checkAuth, list);
productRouter.post("/products", checkAuth, create);
productRouter.delete("/product/:id", checkAuth, remove);
productRouter.patch("/product/:id", checkAuth, update);

export default productRouter;