import { Router } from "express";
import learnedThings from "../things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200).json({ learnedThings });
});

thingsRouter.get("/:thingId", (req, res) => {
  const { thingId } = req.params;

  const currentThing = learnedThings.find((thing) => thing.id === +thingId);

  // eslint-disable-next-line no-negated-condition
  if (!currentThing) {
    res.status(400).json({ error: "current thing not found" });
  } else {
    res.status(200).json({ currentThing });
  }
});

export default thingsRouter;
