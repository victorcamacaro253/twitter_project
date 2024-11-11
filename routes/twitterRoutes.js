import { Router } from "express";
import twitterController from "../controllers/twitterController.js";
const router = Router();

router.get('/timeline/:username', twitterController.showUserTimeline);

router.get('/userData/:username',twitterController.getUserData)


export default router;