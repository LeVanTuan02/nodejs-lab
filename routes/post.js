import { checkAuth } from "../middlewares/checkAuth";
import { Router } from 'express';
import { read, list, create, remove, update, search } from "../controllers/post";
const postRouter = Router();

postRouter.get("/post/:id", checkAuth, read);
postRouter.get("/posts/search", search);
postRouter.get("/posts", checkAuth, list);
postRouter.post("/posts", checkAuth, create);
postRouter.delete("/post/:id", checkAuth, remove);
postRouter.patch("/post/:id", checkAuth, update);

export default postRouter;