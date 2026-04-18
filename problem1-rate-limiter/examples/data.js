// Example request data for the Rate Limiter API

const exampleRequests = [
  { userId: 'alice' }, // valid — within limit
  { userId: 'alice' }, // valid — within limit
  { userId: 'bob' },   // valid — different user, independent window
  {},                  // invalid — missing userId
];
