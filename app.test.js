const request = require('supertest');
const app = require('./app');

describe('App Routes', () => {
  it('GET / should return "KT3 App"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('KT3 App');
  });

  it('GET /health should return { status: "ok" }', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
