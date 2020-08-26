const express = require('express');
const rootRoute = (module.exports = express.Router());

const { routes: taskRoute } = require('./tasks');
const { routes: authRoute } = require('./auth');

rootRoute.use('/task', taskRoute);
rootRoute.use('/auth', authRoute);
