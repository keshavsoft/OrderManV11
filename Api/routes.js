import express from 'express';

import { router as routerFromV4 } from "./V4/routes.js";

const router = express.Router();

router.use('/V4', routerFromV4);

export { router };