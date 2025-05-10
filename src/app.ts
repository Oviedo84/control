import express from "express";
import waterTankRoutes from "./routes/water-tank";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/water-tank/", waterTankRoutes);

export default app;
