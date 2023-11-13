import express, { Router } from 'express';
import { unsafeGetXss, unsafePostXss, safeGetXss, safePostXss } from '../controllers/xssController';

const xssRouter: Router = express.Router();

xssRouter.get('/xss/unsafe', unsafeGetXss);
xssRouter.post('/xss/unsafe', unsafePostXss);
xssRouter.get('/xss/safe', safeGetXss);
xssRouter.post('/xss/safe', safePostXss);

export default xssRouter;