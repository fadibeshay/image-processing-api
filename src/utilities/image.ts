import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

async function resize(
  imageName: string,
  width: number,
  height: number
): Promise<string> {
  const imagePath = path.join(
    __dirname,
    '..',
    '..',
    'images',
    `${imageName}.jpg`
  );

  const thumbPath = path.join(
    __dirname,
    '..',
    '..',
    'thumbs',
    `${imageName}-${width}x${height}.jpg`
  );

  try {
    // If thumbnail is found, do not recreate it
    await fsPromises.access(thumbPath);
  } catch (error) {
    // If thumbnail is not found, create it first
    await sharp(imagePath).resize(width, height).toFile(thumbPath);
  }
  return thumbPath;
}

export default { resize };
