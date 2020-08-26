const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config({ path: path.resolve(__dirname, './config/.env') });

const dbConnect = require('./config/db');

dbConnect();

const { errorHandler } = require('./util/middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const rootRoute = require('./rootRoute');
app.use('/api/v1', rootRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('listening on port', PORT));
