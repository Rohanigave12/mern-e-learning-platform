import express from "express";
import { chatWithAI } from "../controllers/chat.js";

const router = express.Router();

// POST /api/chat
router.post("/chat", chatWithAI);

export default router;