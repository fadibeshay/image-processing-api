import express, { Request, Response } from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (_req: Request, res: Response): void => {
  res.send('Main API route');
});

routes.use('/images', images);

export default routes;
