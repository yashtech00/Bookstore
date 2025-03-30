import express from "express"

const router = express().router();

router.post("/register", Register);
router.post("/login",Login)