import express from 'express';

const images = express.Router();

images.get('/', async (_req, res) => {
  res.send('/api/images route');
});

export default images;
