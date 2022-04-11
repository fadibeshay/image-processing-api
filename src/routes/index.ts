import express from 'express';

const routes = express.Router();

routes.get('/', (_req, res) => {
  res.send('Main API route');
});

export default routes;
