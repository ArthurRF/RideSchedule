import { Request, Response } from "express";
import { CreateRideUseCase } from "./CreateRideUseCase";


class CreateRideController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      start_date,
      start_date_registration,
      end_date_registration,
      additional_information,
      start_place,
      participants_limit
    } = request.body;
    const createRideUseCase = new CreateRideUseCase();

    await createRideUseCase.execute({
      name,
      start_date,
      start_date_registration,
      end_date_registration,
      additional_information,
      start_place,
      participants_limit
    });

    return response.status(201).send();
  }

}

export { CreateRideController }