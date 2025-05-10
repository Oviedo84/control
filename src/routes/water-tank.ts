import { Router } from "express";
import { createWaterTankEntry } from "../controllers/water-tank";

const router = Router();

router.post("/", createWaterTankEntry);

export default router;
