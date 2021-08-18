import { PrismaClient, Ride } from "@prisma/client";

class ListRidesUseCase {
  async execute(): Promise<Ride[]> {
    const prisma = new PrismaClient();
    const rides = await prisma.ride.findMany();

    return rides;
  }
}

export { ListRidesUseCase }