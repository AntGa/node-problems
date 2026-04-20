# Backend - Event Ticket Pricing

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

You are building an event ticketing API where organizers list events at a base ticket price. A fixed price isn't ideal — demand and time of year should influence what attendees pay. Your job is to implement a dynamic pricing engine that adjusts ticket prices automatically.

## Task

Build an Express API with an Event model. Implement a pricing route that dynamically computes the final ticket price for a given event using the following factors:

- **Seasonal Multiplier:** Check the current month — June, July, August (peak season) apply a `1.5x` multiplier; all other months use `1.2x`
- **Demand Multiplier:** If the number of confirmed sales for the event exceeds 8, apply a `1.4x` multiplier; otherwise use `1.0x`
- **Price Constraints:** The final ticket price must stay within **50% and 200%** of the base price, rounded to the nearest dollar

## Acceptance Criteria

- **Create Event** (`POST /events`): Accept `name` and `basePrice` (positive number). Store and return the event with a generated `id` and a `sales` count initialized to `0`.
- **Add Sale** (`POST /events/:id/sales`): Increment the event's `sales` count by 1. Return the updated event.
- **Get Pricing** (`GET /events/:id/pricing`): Return the dynamically computed price using the formula:
  ```
  finalPrice = round(basePrice * seasonalMultiplier * demandMultiplier)
  finalPrice = clamp(finalPrice, basePrice * 0.5, basePrice * 2.0)
  ```
- If an event is not found, respond with HTTP `404` and `{ "error": "Event not found." }`
- Invalid input on creation should respond with HTTP `400` and a descriptive error message

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.
