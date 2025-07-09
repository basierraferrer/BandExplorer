import request from 'supertest';
import app from './app.mjs';

describe('GET /mocks/:file', () => {
  it('should respond with band data if the file exists', async () => {
    const res = await request(app).get('/mocks/001');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('album');
  });

  it('should respond with default data if the file does not exist', async () => {
    const res = await request(app).get('/mocks/002');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('description');
    expect(res.body.description).toMatch(/Lorem ipsum/);
  });
}); 