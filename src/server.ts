import express, { Request, Response } from "express";
import { Router } from "express";

const app = express();

const routes = Router();

const createUserController = new CreateUserController();

routes.post('/user', createUserController.handle);

app.listen(3333, () => {
  console.log("Server is running");
});
