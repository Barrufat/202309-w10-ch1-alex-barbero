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

thingsRouter.delete("/:thingId", (req, res) => {
  const { thingId } = req.params;

  const currentThing = learnedThings.find((thing) => thing.id === +thingId);

  // eslint-disable-next-line no-negated-condition
  if (!currentThing) {
    res.status(400).json({ error: "current thing not found" });
  } else {
    res.status(200).json({ currentThing });
  }
});

thingsRouter.delete("/:thingId", (req, res) => {
  const { thingId } = req.params;

  const thingPosition = learnedThings.findIndex(
    (thing) => thing.id === +thingId,
  );

  if (thingPosition === -1) {
    res.status(404).json({ error: "thing not found" });
    return;
  }

  learnedThings.splice(thingPosition, 1);

  res.status(200).json({ message: learnedThings[thingPosition] });
});

export default thingsRouter;
