const request = require('supertest');
const app = require('../app');

describe('POST /apartments', () => {
  test('creates an apartment and returns it with id and bookings: 0', async () => {
    const res = await request(app).post('/apartments').send({ name: 'Beach House', basePrice: 100 });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.bookings).toBe(0);
  });

  test('returns 400 for missing basePrice', async () => {
    const res = await request(app).post('/apartments').send({ name: 'Beach House' });
    expect(res.status).toBe(400);
  });

  test('returns 400 for negative basePrice', async () => {
    const res = await request(app).post('/apartments').send({ name: 'Beach House', basePrice: -50 });
    expect(res.status).toBe(400);
  });
});

describe('POST /apartments/:id/bookings', () => {
  test('increments bookings count', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Loft', basePrice: 80 });
    const res = await request(app).post(`/apartments/${created.body.id}/bookings`);
    expect(res.status).toBe(200);
    expect(res.body.bookings).toBe(1);
  });

  test('returns 404 for unknown apartment', async () => {
    const res = await request(app).post('/apartments/9999/bookings');
    expect(res.status).toBe(404);
  });
});

describe('GET /apartments/:id/pricing', () => {
  test('returns finalPrice within 50%-200% of basePrice', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Cabin', basePrice: 200 });
    const res = await request(app).get(`/apartments/${created.body.id}/pricing`);
    expect(res.status).toBe(200);
    expect(res.body.finalPrice).toBeGreaterThanOrEqual(100);
    expect(res.body.finalPrice).toBeLessThanOrEqual(400);
  });

  test('returns 404 for unknown apartment', async () => {
    const res = await request(app).get('/apartments/9999/pricing');
    expect(res.status).toBe(404);
  });

  test('finalPrice is a whole number', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Studio', basePrice: 150 });
    const res = await request(app).get(`/apartments/${created.body.id}/pricing`);
    expect(Number.isInteger(res.body.finalPrice)).toBe(true);
  });
});
