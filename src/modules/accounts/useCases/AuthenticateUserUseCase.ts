import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string | null;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "80e8101ee5edef24aa792d49c4982037", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
