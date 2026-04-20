const request = require('supertest');
const app = require('../app');

describe('POST /locker-code', () => {
  test('accepts a valid locker code', async () => {
    const res = await request(app).post('/locker-code').send({ code: '1234' });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Locker code successfully set.');
  });

  test('returns 400 if code is missing', async () => {
    const res = await request(app).post('/locker-code').send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Code is required.');
  });

  test('returns 400 if code is negative', async () => {
    const res = await request(app).post('/locker-code').send({ code: '-123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Code cannot be a negative number.');
  });

  test('returns 400 if code contains letters', async () => {
    const res = await request(app).post('/locker-code').send({ code: '12ab' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Code must contain only numerical digits.');
  });

  test('returns 400 if code is not 4 digits', async () => {
    const res = await request(app).post('/locker-code').send({ code: '123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Code must be exactly 4 digits long.');
  });

  test('returns 400 if code has repeating digits', async () => {
    const res = await request(app).post('/locker-code').send({ code: '1123' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Code must have all unique digits.');
  });

  test('accepts code passed as a number', async () => {
    const res = await request(app).post('/locker-code').send({ code: 5678 });
    expect(res.status).toBe(200);
  });
});
