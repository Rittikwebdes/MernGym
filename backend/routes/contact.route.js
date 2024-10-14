
import express from "express"
import { createContact } from "../controller/contact.controller.js";
const router = express.Router();
router.post("/message",createContact)
export default router;