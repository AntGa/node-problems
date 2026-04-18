const request = require('supertest');
const app = require('../app');

describe('POST /pin', () => {
  test('accepts a valid PIN', async () => {
    const res = await request(app).post('/pin').send({ pin: '1234' });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('PIN successfully set.');
  });

  test('returns 400 if PIN is missing', async () => {
    const res = await request(app).post('/pin').send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('PIN is required.');
  });

  test('returns 400 if PIN is negative', async () => {
    const res = await request(app).post('/pin').send({ pin: '-123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('PIN cannot be a negative number.');
  });

  test('returns 400 if PIN contains letters', async () => {
    const res = await request(app).post('/pin').send({ pin: '12ab' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('PIN must contain only numerical digits.');
  });

  test('returns 400 if PIN is not 4 digits', async () => {
    const res = await request(app).post('/pin').send({ pin: '123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('PIN must be exactly 4 digits long.');
  });

  test('returns 400 if PIN has repeating digits', async () => {
    const res = await request(app).post('/pin').send({ pin: '1123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('PIN must have all unique digits.');
  });

  test('accepts PIN passed as a number', async () => {
    const res = await request(app).post('/pin').send({ pin: 5678 });
    expect(res.status).toBe(200);
  });
});
