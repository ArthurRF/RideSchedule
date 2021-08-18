import { PrismaClient, Ride } from "@prisma/client";
import { request } from "express";
import { IListRidesByUserDTO } from "modules/rides/dtos/IListRidesByUserDTO";

class ListRidesByUserUseCase {
  async execute({ user_id }: IListRidesByUserDTO): Promise<Ride[]> {
    const prisma = new PrismaClient();

    const rides = await prisma.ride.findMany({
      where: {
        RideUser: {
          some: {
            user_id: user_id
          }
        }
      }
    });

    return rides;
  }
}

export { ListRidesByUserUseCase }