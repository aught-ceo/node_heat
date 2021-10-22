import { UserProfileController } from './controllers/UserProfileController';

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


router.post(
  '/profile',
  ensureAuthenticated,
  new UserProfileController().handle
);


export { router }