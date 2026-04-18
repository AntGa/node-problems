const request = require('supertest');
const app = require('../app');

describe('POST /tasks', () => {
  test('creates a task and returns it with an id', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Fix bug', dueDate: '2026-12-01', priority: 'high' });
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();
    expect(res.body.title).toBe('Fix bug');
  });

  test('returns 400 for invalid priority', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test', dueDate: '2026-12-01', priority: 'urgent' });
    expect(res.status).toBe(400);
  });

  test('returns 400 for missing title', async () => {
    const res = await request(app).post('/tasks').send({ dueDate: '2026-12-01', priority: 'low' });
    expect(res.status).toBe(400);
  });

  test('returns 400 for invalid dueDate', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test', dueDate: 'not-a-date', priority: 'low' });
    expect(res.status).toBe(400);
  });
});

describe('GET /tasks', () => {
  test('returns tasks sorted by urgencyScore descending', async () => {
    await request(app).post('/tasks').send({ title: 'Low priority far out', dueDate: '2027-01-01', priority: 'low' });
    await request(app).post('/tasks').send({ title: 'High priority soon', dueDate: '2026-04-19', priority: 'high' });
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body[0].urgencyScore).toBeGreaterThanOrEqual(res.body[1].urgencyScore);
  });

  test('each task includes a computed urgencyScore', async () => {
    const res = await request(app).get('/tasks');
    res.body.forEach(task => {
      expect(typeof task.urgencyScore).toBe('number');
    });
  });
});
