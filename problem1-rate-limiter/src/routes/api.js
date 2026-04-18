const express = require('express');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

// GET /api/data?userId=<string>
router.get('/data', rateLimiter, (req, res) => {
  res.json({ message: 'Request successful.', requestsRemaining: null });
});

module.exports = router;
