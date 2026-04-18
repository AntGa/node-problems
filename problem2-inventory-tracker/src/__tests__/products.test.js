const request = require('supertest');
const app = require('../app');

describe('POST /products', () => {
  test('creates a product and returns it with an id', async () => {
    const res = await request(app).post('/products').send({ name: 'Widget', quantity: 10, minThreshold: 5 });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.name).toBe('Widget');
  });

  test('returns 400 for missing name', async () => {
    const res = await request(app).post('/products').send({ quantity: 10, minThreshold: 5 });
    expect(res.status).toBe(400);
  });

  test('returns 400 for negative quantity', async () => {
    const res = await request(app).post('/products').send({ name: 'Widget', quantity: -1, minThreshold: 5 });
    expect(res.status).toBe(400);
  });
});

describe('GET /products', () => {
  test('returns products with lowStock field', async () => {
    await request(app).post('/products').send({ name: 'Low Item', quantity: 2, minThreshold: 5 });
    const res = await request(app).get('/products');
    expect(res.status).toBe(200);
    const low = res.body.find(p => p.name === 'Low Item');
    expect(low.lowStock).toBe(true);
  });
});

describe('PATCH /products/:id/stock', () => {
  test('updates quantity and returns product', async () => {
    const created = await request(app).post('/products').send({ name: 'Gadget', quantity: 3, minThreshold: 2 });
    const res = await request(app).patch(`/products/${created.body.id}/stock`).send({ quantity: 10 });
    expect(res.status).toBe(200);
    expect(res.body.quantity).toBe(10);
    expect(res.body.lowStock).toBe(false);
  });

  test('returns 404 for unknown id', async () => {
    const res = await request(app).patch('/products/9999/stock').send({ quantity: 5 });
    expect(res.status).toBe(404);
  });
});
