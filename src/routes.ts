import { Application } from 'express';

const routes = (app: Application) => {
  app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  });
};

export default routes;
