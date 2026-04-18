// Run your server first: npm start
// Then run this file: node examples/data.js
// Write the responses you get into examples/output.json

const BASE = 'http://localhost:3000';

async function post(body) {
  const r = await fetch(`${BASE}/pin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return r.json();
}

async function run() {
  // 1. Valid PIN
  console.log('Valid PIN:', await post({ pin: '1234' }));

  // 2. Missing PIN
  console.log('Missing PIN:', await post({}));

  // 3. Negative number
  console.log('Negative PIN:', await post({ pin: '-123' }));

  // 4. Non-numeric characters
  console.log('Non-numeric:', await post({ pin: '12ab' }));

  // 5. Wrong length
  console.log('Wrong length:', await post({ pin: '12' }));

  // 6. Repeating digits
  console.log('Repeating digits:', await post({ pin: '1123' }));
}

run();
