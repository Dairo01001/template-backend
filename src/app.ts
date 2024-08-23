import express, { Application } from 'express';
import { PORT } from './config';
import { unkanowEndpoint } from './middlewares';
import morgan from 'morgan';
import routes from './routes';

const createApp = () => {
  const app: Application = express();
  app.set('port', PORT);
  app.disable('x-powered-by');
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  routes(app);
  app.use(unkanowEndpoint);

  return app;
};

export default createApp;
