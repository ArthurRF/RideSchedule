import { Request, Response } from "express";
import { ListRidesByUserUseCase } from "./ListRidesByUserUseCase";

class ListRidesByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const listRidesByUserUseCase = new ListRidesByUserUseCase();
    const all = await listRidesByUserUseCase.execute({ user_id });

    return response.json(all);
  }
}

export { ListRidesByUserController }