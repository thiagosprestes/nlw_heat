import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";
import { GetLastMessageService } from "../services/GetLastMessagesService";

class GetLastMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastMessageService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLastMessagesController };
