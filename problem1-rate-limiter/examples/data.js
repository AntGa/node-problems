// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function run() {
  // 1. Valid request (first of 5)
  const r1 = await fetch(`${BASE}/api/data?userId=alice`);
  console.log('Request 1:', await r1.json());

  // 2. Valid request (second of 5)
  const r2 = await fetch(`${BASE}/api/data?userId=alice`);
  console.log('Request 2:', await r2.json());

  // 3. Different user — independent window
  const r3 = await fetch(`${BASE}/api/data?userId=bob`);
  console.log('Different user:', await r3.json());

  // 4. Missing userId
  const r4 = await fetch(`${BASE}/api/data`);
  console.log('Missing userId:', await r4.json());

  // 5. Exhaust alice's limit (3 more calls to hit 429)
  for (let i = 3; i <= 5; i++) {
    const r = await fetch(`${BASE}/api/data?userId=alice`);
    console.log(`Request ${i}:`, await r.json());
  }

  // 6. alice is now rate limited
  const r6 = await fetch(`${BASE}/api/data?userId=alice`);
  console.log('Rate limited:', await r6.json());
}

run();
