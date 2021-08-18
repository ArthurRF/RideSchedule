import { PrismaClient } from "@prisma/client";
import { ICreateRideDTO } from "../../dtos/ICreateRideDTO";
import { v4 as uuidv4 } from 'uuid';

class CreateRideUseCase {
  async execute({
    name,
    start_date,
    start_date_registration,
    end_date_registration,
    additional_information,
    start_place,
    participants_limit
  }: ICreateRideDTO): Promise<void> {
    const prisma = new PrismaClient();

    await prisma.ride.create({
      data: {
        id: uuidv4(),
        name: name,
        start_date: new Date(start_date),
        start_date_registration: new Date(start_date_registration),
        end_date_registration: new Date(end_date_registration),
        additional_information: additional_information,
        start_place: start_place,
        participants_limit: participants_limit
      }
    });
  }
}

export { CreateRideUseCase };
