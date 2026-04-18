// Example request data for the Inventory Tracker API

const exampleProducts = [
  { name: 'Widget', quantity: 10, minThreshold: 5 }, // not low stock
  { name: 'Bolt',   quantity: 2,  minThreshold: 5 }, // low stock (quantity <= minThreshold)
];

const exampleStockUpdate = { quantity: 3 }; // PATCH /products/:id/stock
