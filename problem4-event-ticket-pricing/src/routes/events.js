const express = require('express');

const router = express.Router();

const events = [];
let nextId = 1;

// POST /events
router.post('/', (req, res) => {
  res.status(201).json({});
});

// POST /events/:id/sales
router.post('/:id/sales', (req, res) => {
  res.json({});
});

// GET /events/:id/pricing
router.get('/:id/pricing', (req, res) => {
  res.json({});
});

module.exports = router;
