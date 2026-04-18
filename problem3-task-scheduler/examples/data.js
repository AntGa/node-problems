// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function run() {
  // 1. Create a high priority task due in 2 days
  const soon = new Date();
  soon.setDate(soon.getDate() + 2);
  const r1 = await fetch(`${BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Submit report', dueDate: soon.toISOString().split('T')[0], priority: 'high' }),
  });
  console.log('Create high-priority task:', await r1.json());

  // 2. Create a low priority task due in 10 days
  const later = new Date();
  later.setDate(later.getDate() + 10);
  const r2 = await fetch(`${BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Update docs', dueDate: later.toISOString().split('T')[0], priority: 'low' }),
  });
  console.log('Create low-priority task:', await r2.json());

  // 3. Create an overdue medium priority task
  const r3 = await fetch(`${BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fix bug', dueDate: '2026-01-01', priority: 'medium' }),
  });
  console.log('Create overdue task:', await r3.json());

  // 4. Get all tasks sorted by urgencyScore descending
  const r4 = await fetch(`${BASE}/tasks`);
  console.log('Get all tasks (sorted):', await r4.json());

  // 5. Invalid input — empty title
  const r5 = await fetch(`${BASE}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: '', dueDate: '2026-05-01', priority: 'high' }),
  });
  console.log('Invalid input:', await r5.json());
}

run();
