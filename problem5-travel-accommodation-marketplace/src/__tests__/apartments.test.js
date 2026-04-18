const request = require('supertest');
const app = require('../app');

describe('POST /apartments', () => {
  test('creates an apartment with viewCount and popularityScore of 0', async () => {
    const res = await request(app).post('/apartments').send({ name: 'Sunny Flat' });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.viewCount).toBe(0);
    expect(res.body.popularityScore).toBe(0);
  });

  test('returns 400 for missing name', async () => {
    const res = await request(app).post('/apartments').send({});
    expect(res.status).toBe(400);
  });
});

describe('GET /apartments/:id', () => {
  test('increments viewCount on each call', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Garden Suite' });
    await request(app).get(`/apartments/${created.body.id}`);
    const res = await request(app).get(`/apartments/${created.body.id}`);
    expect(res.body.viewCount).toBe(2);
  });

  test('returns 404 for unknown apartment', async () => {
    const res = await request(app).get('/apartments/9999');
    expect(res.status).toBe(404);
  });
});

describe('GET /apartments/:id/views', () => {
  test('returns viewCount without incrementing', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Cozy Nook' });
    await request(app).get(`/apartments/${created.body.id}`);
    const res = await request(app).get(`/apartments/${created.body.id}/views`);
    expect(res.body.viewCount).toBe(1);
  });
});

describe('GET /apartments/:id/popularity', () => {
  test('returns popularityScore of 0 for new apartment', async () => {
    const created = await request(app).post('/apartments').send({ name: 'New Place' });
    const res = await request(app).get(`/apartments/${created.body.id}/popularity`);
    expect(res.body.popularityScore).toBe(0);
  });
});

describe('POST /apartments/:id/bookings', () => {
  test('increments popularityScore by 1', async () => {
    const created = await request(app).post('/apartments').send({ name: 'Popular Spot' });
    await request(app).post(`/apartments/${created.body.id}/bookings`);
    const res = await request(app).get(`/apartments/${created.body.id}/popularity`);
    expect(res.body.popularityScore).toBe(1);
  });

  test('returns 404 for unknown apartment', async () => {
    const res = await request(app).post('/apartments/9999/bookings');
    expect(res.status).toBe(404);
  });
});
