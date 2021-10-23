import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastMessagesController } from "./controllers/GetLastMessagesController";
import { ProfileUserController } from "./controllers/ProfileUsercontroller";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/messages/last3", new GetLastMessagesController().handle);
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

router.get("/github", (req, res) => {
  res.redirect(
    `http://github.com/login/oauth/authorize?client_id=2717587277017e563acc`
  );
});

router.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  return res.json(code);
});

export { router };
