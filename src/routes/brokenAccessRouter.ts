import express, { Router } from 'express';
import { requiresAuth } from 'express-openid-connect';
import { getBrokenAccess, login, logout, getBrokenAccessSafeAdmin, getBrokenAccessUnsafeAdmin, getBrokenAccessUser, getBrokenAccessSafeDash, getBrokenAccessUnsafeDash } from '../controllers/brokenAccessController';

const brokenAccessRouter: Router = express.Router();

brokenAccessRouter.get('/broken-access', getBrokenAccess);
brokenAccessRouter.get('/broken-access/login', login);
brokenAccessRouter.get('/broken-access/logout', logout);

brokenAccessRouter.get('/broken-access/safe/dashboard', requiresAuth(), getBrokenAccessSafeDash);
brokenAccessRouter.get('/broken-access/safe/admin', requiresAuth(), getBrokenAccessSafeAdmin);
brokenAccessRouter.get('/broken-access/safe/user', requiresAuth(), getBrokenAccessUser);

brokenAccessRouter.get('/broken-access/unsafe/dashboard', requiresAuth(), getBrokenAccessUnsafeDash);
brokenAccessRouter.get('/broken-access/unsafe/admin', requiresAuth(), getBrokenAccessUnsafeAdmin);
brokenAccessRouter.get('/broken-access/unsafe/user', requiresAuth(), getBrokenAccessUser);

export default brokenAccessRouter;
