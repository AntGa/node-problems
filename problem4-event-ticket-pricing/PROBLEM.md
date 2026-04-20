# Backend - Dynamic Pricing Engine

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

You are building a travel booking API where hosts list apartments at a base nightly rate. A fixed price isn't ideal — demand and season should influence what guests pay. Your job is to implement a dynamic pricing engine that adjusts rates automatically.

## Task

Build an Express API with an Apartment model. Implement a pricing route that dynamically computes the final booking price for a given apartment using the following factors:

- **Seasonal Multiplier:** Check the current month — June, July, August (peak season) apply a `1.5x` multiplier; all other months use `1.2x`
- **Demand Multiplier:** If the number of confirmed bookings for the apartment exceeds 8, apply a `1.4x` multiplier; otherwise use `1.0x`
- **Price Constraints:** The final booking price must stay within **50% and 200%** of the base price, rounded to the nearest dollar

## Acceptance Criteria

- **Create Apartment** (`POST /apartments`): Accept `name` and `basePrice` (positive number). Store and return the apartment with a generated `id` and a `bookings` count initialized to `0`.
- **Add Booking** (`POST /apartments/:id/bookings`): Increment the apartment's `bookings` count by 1. Return the updated apartment.
- **Get Pricing** (`GET /apartments/:id/pricing`): Return the dynamically computed price using the formula:
  ```
  finalPrice = round(basePrice * seasonalMultiplier * demandMultiplier)
  finalPrice = clamp(finalPrice, basePrice * 0.5, basePrice * 2.0)
  ```
- If an apartment is not found, respond with HTTP `404` and `{ "error": "Apartment not found." }`
- Invalid input on creation should respond with HTTP `400` and a descriptive error message

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.