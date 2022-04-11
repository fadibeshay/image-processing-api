import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test GET api/images endpoint response', () => {
  it('gets status code 200', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('gets status code 400 if one query is missing or invalid', async () => {
    const response = await request.get(
      '/api/images?filename=encenadaport&width=200'
    );
    expect(response.status).toBe(400);
  });

  it('gets status code 404 if image file is not found', async () => {
    const response = await request.get(
      '/api/images?filename=notfound&width=200&height=200'
    );
    expect(response.status).toBe(404);
  });
});
