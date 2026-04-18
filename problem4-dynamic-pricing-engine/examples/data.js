// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function run() {
  // 1. Create an apartment
  const r1 = await fetch(`${BASE}/apartments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Sea View Suite', basePrice: 100 }),
  });
  console.log('Create apartment:', await r1.json());

  // 2. Get pricing before any bookings (low demand)
  const r2 = await fetch(`${BASE}/apartments/1/pricing`);
  console.log('Pricing (low demand):', await r2.json());

  // 3. Add 9 bookings to exceed demand threshold
  for (let i = 1; i <= 9; i++) {
    await fetch(`${BASE}/apartments/1/bookings`, { method: 'POST' });
  }
  const r3 = await fetch(`${BASE}/apartments/1/pricing`);
  console.log('Pricing (high demand, 9 bookings):', await r3.json());

  // 4. Invalid input — missing basePrice
  const r4 = await fetch(`${BASE}/apartments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'No Price' }),
  });
  console.log('Invalid input:', await r4.json());

  // 5. Apartment not found
  const r5 = await fetch(`${BASE}/apartments/999/pricing`);
  console.log('Not found:', await r5.json());
}

run();
