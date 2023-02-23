import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers
    try {
      const list = this.listAllUsersUseCase.execute({ user_id: user_id.toString() })
      return response.json(list);
    } catch (error) {
      return response.status(400).json({error: "You are not logged in or you are not an admin!"})
    }

  }
}

export { ListAllUsersController };
