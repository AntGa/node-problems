# Backend - API Rate Limiter

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

This is a REST API application. We want to protect our endpoints from abuse by implementing a simple in-memory rate limiter that restricts how many requests a single user can make within a time window.

## Task

Build an Express app with a rate-limiting middleware that:

- Tracks the number of requests each user makes (identified by their `userId` query parameter)
- Rejects requests that exceed the allowed limit within the time window

## Acceptance Criteria

- **Request Limit:** Each user may make at most **5 requests per 60-second window**
- **Window Reset:** After 60 seconds from the user's first request, their count resets
- **Blocked Response:** If the limit is exceeded, respond with HTTP `429` and the JSON body:
  ```json
  { "error": "Too many requests. Please try again later." }
  ```
- **Allowed Response:** If within the limit, respond with HTTP `200` and:
  ```json
  { "message": "Request successful.", "requestsRemaining": <number> }
  ```
- **Missing userId:** If no `userId` is provided, respond with HTTP `400` and:
  ```json
  { "error": "userId is required." }
  ```

## Technical Considerations

- Use an in-memory store (plain JS object) — no database required
- Do not use any third-party rate-limiting libraries (e.g. `express-rate-limit`)
- The middleware must be reusable and applied to `GET /api/data`

## Endpoint

```
GET /api/data?userId=<string>
```

## Example Input / Output

Sample requests are in **`examples/data.js`**. Start your server, run `node examples/data.js`, then record the responses in **`examples/output.json`**.

## Where to Store Your Work

Write your solution in the following files:

- **`src/middleware/rateLimiter.js`** — implement the rate-limiting middleware
- **`src/routes/api.js`** — apply the middleware to `GET /api/data`
- **`src/app.js`** — register the router
