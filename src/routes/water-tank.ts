import { Router } from "express";
import * as waterTankController from "../controllers/water-tank";

const router = Router();

router.post("/", waterTankController.createWaterTankEntry);
router.get("/", waterTankController.getWaterTankEntries);

export default router;
