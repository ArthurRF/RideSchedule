import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { ridesRoutes } from "./rides.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/rides", ridesRoutes);
router.use(authenticateRoutes);

export { router };