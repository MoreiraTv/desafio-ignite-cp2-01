import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body
    if (!name || !email) throw new Error("Fill in all fields!");
    try {
      const user = this.createUserUseCase.execute({ name, email })
      return response.status(201).send(user)
    } catch (error) {
      return response.status(400).json({ error: "Entered email is already in use" })
    }
  }
}

export { CreateUserController };
