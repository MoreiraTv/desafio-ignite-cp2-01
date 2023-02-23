import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params
    if (!user_id) response.status(400).json({ error: "Inform the id!" })
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id })
      return response.status(200).send(user)
    } catch (error) {
      return response.status(404).json({ error: "Unable to change user to admin!" })
    }
  }
}

export { TurnUserAdminController };
