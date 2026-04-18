# Backend - Travel Accommodation Marketplace

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

You are building a travel accommodation marketplace where guests can browse and book apartments. To help guests discover popular listings, the API needs to track how often apartments are viewed and booked.

## Task

Build an Express API with an Apartment model that:

- Exposes both metrics (`popularityScore` and `viewCount`) via dedicated GET endpoints. These return zero for new apartments.
- Tracks where in the code `viewCount` and `popularityScore` are incremented

## Acceptance Criteria

- **Create Apartment** (`POST /apartments`): Accept `name`. Store and return the apartment with a generated `id`, `viewCount: 0`, and `popularityScore: 0`.
- **Get Apartment** (`GET /apartments/:id`): Return the apartment. **This endpoint should increment `viewCount` by 1 on every call.**
- **Get View Count** (`GET /apartments/:id/views`): Return `{ "viewCount": <number> }` — zero for a new apartment.
- **Get Popularity Score** (`GET /apartments/:id/popularity`): Return `{ "popularityScore": <number> }` — zero for a new apartment.
- **Add Booking** (`POST /apartments/:id/bookings`): Record a booking and **increment `popularityScore` by 1**.
- If an apartment is not found on any route, respond with HTTP `404` and `{ "error": "Apartment not found." }`

## Where to Increment

- `viewCount` — increment inside the `GET /apartments/:id` handler, every time the apartment detail page is fetched
- `popularityScore` — increment inside the `POST /apartments/:id/bookings` handler, every time a confirmed booking is made

## Technical Considerations

- Use an in-memory array — no database required
- `viewCount` and `popularityScore` are stored on the apartment object, not computed
- The `/views` and `/popularity` endpoints are read-only — they do not modify state

## Example Input / Output

Sample requests are in **`examples/data.js`**. Start your server, run `node examples/data.js`, then record the responses in **`examples/output.json`**.

## Where to Store Your Work

Write your solution in the following files:

- **`src/routes/apartments.js`** — implement all apartment route handlers
- **`src/app.js`** — register the apartments router
