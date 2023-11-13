import express, { Router } from 'express';
import home from '../controllers/homeController';

const homeRouter: Router = express.Router();

homeRouter.get('/', home);

export default homeRouter;