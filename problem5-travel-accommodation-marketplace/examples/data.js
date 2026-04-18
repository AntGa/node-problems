// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function run() {
  // 1. Create an apartment
  const r1 = await fetch(`${BASE}/apartments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Beach Cottage' }),
  });
  console.log('Create apartment:', await r1.json());

  // 2. Get apartment (increments viewCount)
  const r2 = await fetch(`${BASE}/apartments/1`);
  console.log('Get apartment (view 1):', await r2.json());

  // 3. Get apartment again (viewCount should be 2)
  const r3 = await fetch(`${BASE}/apartments/1`);
  console.log('Get apartment (view 2):', await r3.json());

  // 4. Get view count
  const r4 = await fetch(`${BASE}/apartments/1/views`);
  console.log('View count:', await r4.json());

  // 5. Add a booking (increments popularityScore)
  const r5 = await fetch(`${BASE}/apartments/1/bookings`, { method: 'POST' });
  console.log('Add booking:', await r5.json());

  // 6. Get popularity score
  const r6 = await fetch(`${BASE}/apartments/1/popularity`);
  console.log('Popularity score:', await r6.json());

  // 7. Apartment not found
  const r7 = await fetch(`${BASE}/apartments/999`);
  console.log('Not found:', await r7.json());
}

run();
