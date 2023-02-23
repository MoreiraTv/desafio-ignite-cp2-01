import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params
    if (!user_id) return response.status(400).json({ error: "Fill in the user_id field!" })
    try {
      const user = this.showUserProfileUseCase.execute({ user_id })
      return response.status(200).json(user)
    } catch (error) {
      return response.status(404).json({ error: "User not found!" })
    }
  }
}

export { ShowUserProfileController };
