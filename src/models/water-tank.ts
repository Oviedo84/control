import { Schema, model } from "mongoose";

const waterTankSchema = new Schema(
  {
    water_level: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const WaterTank = model("water_tank", waterTankSchema);

export default WaterTank;
