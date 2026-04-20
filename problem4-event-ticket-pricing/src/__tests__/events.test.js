const request = require('supertest');
const app = require('../app');

describe('POST /events', () => {
  test('creates an event and returns it with id and sales: 0', async () => {
    const res = await request(app).post('/events').send({ name: 'Jazz Night', basePrice: 100 });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.sales).toBe(0);
  });

  test('returns 400 for missing basePrice', async () => {
    const res = await request(app).post('/events').send({ name: 'Jazz Night' });
    expect(res.status).toBe(400);
  });

  test('returns 400 for negative basePrice', async () => {
    const res = await request(app).post('/events').send({ name: 'Jazz Night', basePrice: -50 });
    expect(res.status).toBe(400);
  });
});

describe('POST /events/:id/sales', () => {
  test('increments sales count', async () => {
    const created = await request(app).post('/events').send({ name: 'Comedy Show', basePrice: 80 });
    const res = await request(app).post(`/events/${created.body.id}/sales`);
    expect(res.status).toBe(200);
    expect(res.body.sales).toBe(1);
  });

  test('returns 404 for unknown event', async () => {
    const res = await request(app).post('/events/9999/sales');
    expect(res.status).toBe(404);
  });
});

describe('GET /events/:id/pricing', () => {
  test('returns finalPrice within 50%-200% of basePrice', async () => {
    const created = await request(app).post('/events').send({ name: 'Rock Concert', basePrice: 200 });
    const res = await request(app).get(`/events/${created.body.id}/pricing`);
    expect(res.status).toBe(200);
    expect(res.body.finalPrice).toBeGreaterThanOrEqual(100);
    expect(res.body.finalPrice).toBeLessThanOrEqual(400);
  });

  test('returns 404 for unknown event', async () => {
    const res = await request(app).get('/events/9999/pricing');
    expect(res.status).toBe(404);
  });

  test('finalPrice is a whole number', async () => {
    const created = await request(app).post('/events').send({ name: 'Art Expo', basePrice: 150 });
    const res = await request(app).get(`/events/${created.body.id}/pricing`);
    expect(Number.isInteger(res.body.finalPrice)).toBe(true);
  });
});
