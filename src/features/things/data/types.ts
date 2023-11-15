import { type Request } from "express";

interface ThingStructure {
  id: number;
  thingName: string;
  learnedLevel: string;
}

export type ByThingId = Request<{
  thingId: string;
}>;

export type ThingWithoutId = Omit<ThingStructure, "id">;

export default ThingStructure;
