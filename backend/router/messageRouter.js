import express from "express";
import { sendMessage, updateMessage, deleteMessage } from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.post("/update", updateMessage);
router.post("/delete", deleteMessage);

export default router;