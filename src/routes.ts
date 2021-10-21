import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);


router.get("/github", (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})


router.get("/signin/callback", (request, response) => {
  const { code } = request.query;
  return response.json({ "code": code });
})


router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)


router.get("/messages/last3", new GetLast3MessagesController().handle)


export { router }