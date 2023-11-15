import learnedThings from "../data/things.js";
import type ThingStructure from "../data/types.js";
import { type ThingWithoutId } from "../data/types.js";

class ThingsRepository {
  public getThings(): ThingStructure[] {
    return learnedThings;
  }

  public getThingById(thingId: number): ThingStructure {
    const thing = learnedThings.find((thing) => thing.id === thingId);

    if (!thing) {
      throw new Error("Thing not found!");
    }

    return thing;
  }

  public deleteThingById(thingId: number): ThingStructure {
    const thing = learnedThings.find((thing) => thing.id === thingId);

    if (!thing) {
      throw new Error("Thing not found!");
    }

    return thing;
  }

  public addNewThing(newThingWithoutId: ThingWithoutId): ThingStructure {
    const newThing: ThingStructure = {
      ...newThingWithoutId,
      id:
        learnedThings.reduce(
          (acumulator, thing) =>
            thing.id > acumulator ? thing.id : acumulator,
          0,
        ) + 1,
    };

    learnedThings.push(newThing);

    return newThing;
  }
}

export default ThingsRepository;
