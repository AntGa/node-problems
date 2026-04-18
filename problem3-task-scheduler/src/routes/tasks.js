const express = require('express');

const router = express.Router();

// In-memory store
const tasks = [];
let nextId = 1;

// POST /tasks
router.post('/', (req, res) => {
  res.status(201).json({});
});

// GET /tasks
router.get('/', (req, res) => {
  res.json([]);
});

module.exports = router;
