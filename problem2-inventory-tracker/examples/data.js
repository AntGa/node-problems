// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function run() {
  // 1. Create a product (not low stock)
  const r1 = await fetch(`${BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Widget', quantity: 10, minThreshold: 5 }),
  });
  console.log('Create product:', await r1.json());

  // 2. Create a product (low stock)
  const r2 = await fetch(`${BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Bolt', quantity: 2, minThreshold: 5 }),
  });
  console.log('Create low-stock product:', await r2.json());

  // 3. Get all products (lowStock computed)
  const r3 = await fetch(`${BASE}/products`);
  console.log('Get all products:', await r3.json());

  // 4. Update stock on product 1 (drop below threshold)
  const r4 = await fetch(`${BASE}/products/1/stock`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity: 3 }),
  });
  console.log('Update stock:', await r4.json());

  // 5. Product not found
  const r5 = await fetch(`${BASE}/products/999/stock`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity: 1 }),
  });
  console.log('Not found:', await r5.json());

  // 6. Invalid input
  const r6 = await fetch(`${BASE}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', quantity: 10, minThreshold: 5 }),
  });
  console.log('Invalid input:', await r6.json());
}

run();
