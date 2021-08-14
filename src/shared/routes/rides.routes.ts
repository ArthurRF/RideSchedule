import { Router } from "express";
import { CreateRideController } from "modules/rides/useCases/CreateRideController";
import { ListRidesController } from "modules/rides/useCases/ListRidesController";

const ridesRoutes = Router();

const createRideController = new CreateRideController();
const listRidesController = new ListRidesController();

ridesRoutes.post("/", createRideController.handle);
ridesRoutes.get("/", listRidesController.handle);

export { ridesRoutes };