import express from 'express';
import image from '../../utilities/image';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename as string | undefined;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename) {
    return res.status(400).json({ error: 'filename is missing' });
  }
  if (!(width > 0)) {
    return res
      .status(400)
      .json({ error: 'width is missing or not a positive number' });
  }
  if (!(height > 0)) {
    return res
      .status(400)
      .json({ error: 'height is missing or not a positive number' });
  }

  try {
    const thumb = await image.resize(filename, width, height);
    res.sendFile(thumb);
  } catch (error) {
    return res.status(404).json({ error: 'image not found' });
  }
});

export default images;
