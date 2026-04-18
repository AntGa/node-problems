const express = require('express');

const router = express.Router();

const apartments = [];
let nextId = 1;

// POST /apartments
router.post('/', (req, res) => {
  res.status(201).json({});
});

// POST /apartments/:id/bookings
router.post('/:id/bookings', (req, res) => {
  res.json({});
});

// GET /apartments/:id/pricing
router.get('/:id/pricing', (req, res) => {
  res.json({});
});

module.exports = router;
