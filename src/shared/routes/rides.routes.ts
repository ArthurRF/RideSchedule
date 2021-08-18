import { Router } from "express";
import { CreateRideController } from "modules/rides/useCases/createRide/CreateRideController";
import { ListRidesByUserController } from "modules/rides/useCases/listRides/ListRidesByUserController";
import { ListRidesController } from "modules/rides/useCases/listRides/ListRidesController";
import { SubscribeToRideController } from "modules/rides/useCases/subscribeToRide/SubscribeToRideController";
import { ensureAuthenticated } from "shared/middlewares/ensureAuthenticated";

const ridesRoutes = Router();

const createRideController = new CreateRideController();
const subscribeToRideController = new SubscribeToRideController();
const listRidesController = new ListRidesController();
const listRidesByUserController = new ListRidesByUserController();

ridesRoutes.use(ensureAuthenticated);
ridesRoutes.post("/", createRideController.handle);
ridesRoutes.post("/subscribe", subscribeToRideController.handle);
ridesRoutes.get("/", listRidesController.handle);
ridesRoutes.get("/mine", listRidesByUserController.handle);

export { ridesRoutes };