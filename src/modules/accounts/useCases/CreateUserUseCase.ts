import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { v4 as uuidv4 } from "uuid";
import { User } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { AppError } from "shared/errors/AppError";

class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<void> {
    const prisma = new PrismaClient();

    const userAlreadyExists: User | null = await prisma.user.findFirst({
      where: {
        email: email
      },
    })

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    await prisma.user.create({
      data: {
        id: uuidv4(),
        name: name,
        email: email,
        password: passwordHash,
      }
    });
  }
}

export { CreateUserUseCase };
