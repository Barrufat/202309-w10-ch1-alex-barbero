import { type Request, type Response } from "express";
import { type ThingWithoutId, type ByThingId } from "../../data/types.js";
import ThingsRepository from "../../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();

    res.status(200).json({ things });
  }

  public getThingById(req: ByThingId, res: Response) {
    const { thingId } = req.params;

    try {
      const thing = thingsRepository.getThingById(+thingId);
      res.status(200).json({ thing });
    } catch {
      res.status(400).json({ error: "current thing not found" });
    }
  }

  public deleteThingById(req: ByThingId, res: Response) {
    const { thingId } = req.params;

    const thing = thingsRepository.deleteThingById(+thingId);
    const deleteMessage = `${thing.thingName} successfully deleted`;

    try {
      res.status(200).json({ message: deleteMessage });
    } catch {
      res.status(400).json({ error: "current thing not found" });
    }
  }

  public addThing(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      ThingWithoutId
    >,
    res: Response,
  ) {
    const newThingData = req.body;

    const newThing = thingsRepository.addNewThing(newThingData);

    res.status(201).json({ thing: newThing });
  }
}

export default ThingsController;
