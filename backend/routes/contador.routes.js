import express from "express";
import { incrementarContador } from "../controllers/contador.controller.js";

const router = express.Router();
export default router;

router.get("/", incrementarContador);
