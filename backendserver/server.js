import path from 'path';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, './config/.env') });

import dbConnect from './config/db';

dbConnect();

const { errorHandler } = require('./util/middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

import rootRoute from './config/routes';
app.use('/api/v1', rootRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log('listening on port', PORT));
