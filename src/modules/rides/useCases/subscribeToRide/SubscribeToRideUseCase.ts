import { PrismaClient, RideUser } from "@prisma/client";
import { ISubscribeToRideDTO } from "modules/rides/dtos/ISubscribeToRideDTO";
import { AppError } from "shared/errors/AppError";

class SubscribeToRideUseCase {
  async execute({
    user_id,
    ride_id
  }: ISubscribeToRideDTO): Promise<void> {
    const prisma = new PrismaClient();

    const subscriptionAlreadyExists: RideUser | null = await prisma.rideUser.findFirst({
      where: {
        user_id: user_id,
        ride_id: ride_id
      },
    });

    if (subscriptionAlreadyExists) {
      throw new AppError('Subscription already done!');
    }

    const countUsersByRide = await prisma.rideUser.count({
      where: {
        ride_id: ride_id
      }
    });

    if (countUsersByRide >= 10) {
      throw new AppError('Ride full of riders!')
    }

    await prisma.rideUser.create({
      data: {
        user_id: user_id,
        ride_id: ride_id,
        subscription_date: new Date()
      }
    });
  }
}

export { SubscribeToRideUseCase };
