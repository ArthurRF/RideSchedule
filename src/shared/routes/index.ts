import { Router } from "express";
import { ridesRoutes } from "./rides.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/rides", ridesRoutes);

export { router };