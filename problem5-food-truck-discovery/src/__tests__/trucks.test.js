const request = require('supertest');
const app = require('../app');

describe('POST /trucks', () => {
  test('creates a food truck with viewCount and popularityScore of 0', async () => {
    const res = await request(app).post('/trucks').send({ name: 'Taco Taco' });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.viewCount).toBe(0);
    expect(res.body.popularityScore).toBe(0);
  });

  test('returns 400 for missing name', async () => {
    const res = await request(app).post('/trucks').send({});
    expect(res.status).toBe(400);
  });
});

describe('GET /trucks/:id', () => {
  test('increments viewCount on each call', async () => {
    const created = await request(app).post('/trucks').send({ name: 'Burger Bus' });
    await request(app).get(`/trucks/${created.body.id}`);
    const res = await request(app).get(`/trucks/${created.body.id}`);
    expect(res.body.viewCount).toBe(2);
  });

  test('returns 404 for unknown truck', async () => {
    const res = await request(app).get('/trucks/9999');
    expect(res.status).toBe(404);
  });
});

describe('GET /trucks/:id/views', () => {
  test('returns viewCount without incrementing', async () => {
    const created = await request(app).post('/trucks').send({ name: 'Noodle Wagon' });
    await request(app).get(`/trucks/${created.body.id}`);
    const res = await request(app).get(`/trucks/${created.body.id}/views`);
    expect(res.body.viewCount).toBe(1);
  });
});

describe('GET /trucks/:id/popularity', () => {
  test('returns popularityScore of 0 for new truck', async () => {
    const created = await request(app).post('/trucks').send({ name: 'Pizza Pedal' });
    const res = await request(app).get(`/trucks/${created.body.id}/popularity`);
    expect(res.body.popularityScore).toBe(0);
  });
});

describe('POST /trucks/:id/orders', () => {
  test('increments popularityScore by 1', async () => {
    const created = await request(app).post('/trucks').send({ name: 'Sushi Roll' });
    await request(app).post(`/trucks/${created.body.id}/orders`);
    const res = await request(app).get(`/trucks/${created.body.id}/popularity`);
    expect(res.body.popularityScore).toBe(1);
  });

  test('returns 404 for unknown truck', async () => {
    const res = await request(app).post('/trucks/9999/orders');
    expect(res.status).toBe(404);
  });
});
