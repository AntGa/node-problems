const express = require('express');

const router = express.Router();

// In-memory store
const products = [];
let nextId = 1;

// POST /products
router.post('/', (req, res) => {
  res.status(201).json({});
});

// GET /products
router.get('/', (req, res) => {
  res.json([]);
});

// PATCH /products/:id/stock
router.patch('/:id/stock', (req, res) => {
  res.json({});
});

module.exports = router;
