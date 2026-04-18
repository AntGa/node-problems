const request = require('supertest');
const app = require('../app');

describe('GET /api/data', () => {
  test('returns 400 if userId is missing', async () => {
    const res = await request(app).get('/api/data');
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('userId is required.');
  });

  test('returns 200 with requestsRemaining on valid request', async () => {
    const res = await request(app).get('/api/data?userId=user1');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Request successful.');
    expect(typeof res.body.requestsRemaining).toBe('number');
  });

  test('returns 429 after exceeding 5 requests', async () => {
    for (let i = 0; i < 5; i++) {
      await request(app).get('/api/data?userId=user2');
    }
    const res = await request(app).get('/api/data?userId=user2');
    expect(res.status).toBe(429);
    expect(res.body.error).toBeDefined();
  });
});
