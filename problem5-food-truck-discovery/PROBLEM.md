# Backend - Food Truck Discovery

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

You are building a food truck discovery platform where users can browse and order from local food trucks. To help users find popular trucks, the API needs to track how often trucks are viewed and ordered from.

## Task

Build an Express API with a Food Truck model that:

- Exposes both metrics (`popularityScore` and `viewCount`) via dedicated GET endpoints. These return zero for new trucks.
- Tracks where in the code `viewCount` and `popularityScore` are incremented

## Acceptance Criteria

- **Create Truck** (`POST /trucks`): Accept `name`. Store and return the truck with a generated `id`, `viewCount: 0`, and `popularityScore: 0`.
- **Get Truck** (`GET /trucks/:id`): Return the truck. **This endpoint should increment `viewCount` by 1 on every call.**
- **Get View Count** (`GET /trucks/:id/views`): Return `{ "viewCount": <number> }` — zero for a new truck.
- **Get Popularity Score** (`GET /trucks/:id/popularity`): Return `{ "popularityScore": <number> }` — zero for a new truck.
- **Add Order** (`POST /trucks/:id/orders`): Record an order and **increment `popularityScore` by 1**.
- If a truck is not found on any route, respond with HTTP `404` and `{ "error": "Truck not found." }`

## Where to Increment

- `viewCount` — increment inside the `GET /trucks/:id` handler, every time the truck detail page is fetched
- `popularityScore` — increment inside the `POST /trucks/:id/orders` handler, every time a confirmed order is placed

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.
