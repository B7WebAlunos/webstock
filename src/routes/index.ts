import { Router } from 'express';

import * as LandController from '../controllers/landController';
import * as LogController from '../controllers/logController';
import * as HomeController from '../controllers/homeController';

const router = Router();

router.get('/', LandController.index);
router.get('/login', LogController.login);
router.get('/logout', LogController.logout);
router.get('/home', HomeController.home);

export default router;