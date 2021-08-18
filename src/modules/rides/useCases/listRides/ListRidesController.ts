import { Request, Response } from "express";
import { ListRidesUseCase } from "./ListRidesUseCase";


class ListRidesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listRidesUseCase = new ListRidesUseCase();
    const all = await listRidesUseCase.execute();

    return response.json(all);
  }
}

export { ListRidesController }