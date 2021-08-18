import { Request, Response } from "express";
import { SubscribeToRideUseCase } from "./SubscribeToRideUseCase";

class SubscribeToRideController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      user_id,
      ride_id
    } = request.body;
    const subscribeToRideUseCase = new SubscribeToRideUseCase();

    await subscribeToRideUseCase.execute({
      user_id,
      ride_id
    });

    return response.status(201).send();
  }

}

export { SubscribeToRideController }