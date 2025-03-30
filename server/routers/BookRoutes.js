import express from "express";
import { AddBooks, AllBooks } from "../controllers/BookController.js";

const router = express.Router();

router.post("/AddBook", AddBooks);
router.get("/AllBook", AllBooks);

export default router;