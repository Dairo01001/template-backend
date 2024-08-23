import express, { Application } from 'express';
import { PORT } from './config';
import { unkanowEndpoint } from './middlewares';

const createApp = () => {
  const app: Application = express();
  app.set('port', PORT);

  app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  });

  app.use(unkanowEndpoint);

  return app;
};

export default createApp;
