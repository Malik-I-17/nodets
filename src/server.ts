import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import appRoutes from './routes/index';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { createServer } from 'node:http';

import connectDB from './utils/mongoose/db';
import logger from './helpers/logger';
import { handleError } from './errorhandler/errorHandler';

// Env Config
dotenv.config({ path: path.join(__dirname, '../.env') });

const port = parseInt(process.env.PORT, 10) || '9000';
console.log('port: ', port);

const app = express();
const httpServer = createServer(app);

const corsUrl = process.env.CORS_URL;
app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    origin: ['http://localhost:3000', corsUrl],
  }),
);
// app.use(express.json());
// Use Helmet!
app.use(helmet());
app.use('/webhook', appRoutes());

app.use(express.urlencoded({ extended: true }));

//app.use(expressFileUpload());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// DB Connect
connectDB()
  .then(() => {
    httpServer.listen(port, () => console.log(`Server is listening on port ${port} - pid: ${process.pid}`));
  })
  .catch((error: any) => {
    console.error('Failed to start server:', error);
    // logger.error(error.message, { payload: request.body, error_stack: error.stack });
  });


app.get('/api/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/header/check', (req, res) => {
  const title = req.query.title;
  logger.info('Header-check', { title: title, headers: req.headers });
  res.sendStatus(200);
});

app.get('/error/logs', (req, res) => {
  fs.readFile(path.resolve(__dirname, '../error.log'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});
app.get('/logs', (req, res) => {
  fs.readFile(path.resolve(__dirname, '../combined.log'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

app.use('/api/v1', appRoutes());
app.use('/api', appRoutes());

app.use(handleError);
