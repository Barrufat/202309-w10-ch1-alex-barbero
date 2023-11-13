import { Router } from "express";
import type ThingStructure from "./types";

const thingsRouter = Router();

const learnedThings: ThingStructure[] = [
  { id: 1, thingName: "React", type: "SPA tool" },
  { id: 2, thingName: "Github", type: "Repository" },
];

thingsRouter.get("/", (_req, res) => {
  res.status(200).json({ learnedThings });
});

export default thingsRouter;
