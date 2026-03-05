const express = require('express');
const serverless = require('serverless-http');
const connectDB = require('../Config/db');
const seatRoutes = require('../Routes/seatRoutes');

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

app.use('/', seatRoutes);

module.exports.handler = serverless(app);
