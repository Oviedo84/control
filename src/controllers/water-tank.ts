import { Request, Response, NextFunction } from "express";
import * as waterTankService from "../services/water-tank";

export const createWaterTankEntry = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const entry = await waterTankService.createWaterTankEntry(req.body);
    res.status(201).json(entry);
  } catch (e) {
    next(e);
  }
};
