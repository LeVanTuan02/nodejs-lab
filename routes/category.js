import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth";
import { create, list, read, update, remove } from "../controllers/category";

const router = Router();

router.post("/category", checkAuth, create);
router.get("/category", checkAuth, list);
router.get("/category/:id", checkAuth, read);
router.put("/category/:id", checkAuth, update);
router.delete("/category/:id", checkAuth, remove);

export default router;