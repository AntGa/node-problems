const express = require('express');

const router = express.Router();

const trucks = [];
let nextId = 1;

// POST /trucks
router.post('/', (req, res) => {
  res.status(201).json({});
});

// GET /trucks/:id
router.get('/:id', (req, res) => {
  res.json({});
});

// GET /trucks/:id/views
router.get('/:id/views', (req, res) => {
  res.json({});
});

// GET /trucks/:id/popularity
router.get('/:id/popularity', (req, res) => {
  res.json({});
});

// POST /trucks/:id/orders
router.post('/:id/orders', (req, res) => {
  res.json({});
});

module.exports = router;
