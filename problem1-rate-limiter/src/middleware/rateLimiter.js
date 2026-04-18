const store = {};

function rateLimiter(req, res, next) {
  next();
}

module.exports = rateLimiter;
