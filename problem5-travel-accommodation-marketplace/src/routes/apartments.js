const express = require('express');

const router = express.Router();

const apartments = [];
let nextId = 1;

// POST /apartments
router.post('/', (req, res) => {
  res.status(201).json({});
});

// GET /apartments/:id
router.get('/:id', (req, res) => {
  res.json({});
});

// GET /apartments/:id/views
router.get('/:id/views', (req, res) => {
  res.json({});
});

// GET /apartments/:id/popularity
router.get('/:id/popularity', (req, res) => {
  res.json({});
});

// POST /apartments/:id/bookings
router.post('/:id/bookings', (req, res) => {
  res.json({});
});

module.exports = router;
