import express from "express";

const router = express().router();

router.post("/AddBook", AddBook);
router.get("/AllBook", AllBooks);