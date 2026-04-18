// Example request data for the Banking App API

const examplePins = [
  { pin: '1234' },  // valid
  { pin: '1123' },  // invalid — repeating digits
  { pin: '12ab' },  // invalid — non-numeric characters
  { pin: '12' },    // invalid — wrong length
  { pin: '-123' },  // invalid — negative number
  {},               // invalid — missing pin
];
