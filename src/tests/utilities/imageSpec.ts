import image from '../../utilities/image';

describe('Test utilities/image resize function', (): void => {
  it('expects resize not to throw an error', async (): Promise<void> => {
    await expectAsync(image.resize('encenadaport', 200, 200)).toBeResolved();
  });
  it('expects resize to throw an error for bad input file', async (): Promise<void> => {
    await expectAsync(image.resize('badfilepath', 200, 200)).toBeRejectedWith(
      new Error('Input file is missing')
    );
  });
});
