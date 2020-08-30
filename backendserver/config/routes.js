import express from 'express';

import { routes as taskRoute } from '../tasks';
import { routes as authRoute } from '../auth';

const rootRoute = express.Router();

rootRoute.use('/task', taskRoute);
rootRoute.use('/auth', authRoute);

export default rootRoute;
