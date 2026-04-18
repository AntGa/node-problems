# Backend - Inventory Tracker

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

This is an inventory management application for a small warehouse. We want to allow users to add products, update stock quantities, and automatically flag items that fall below a minimum threshold.

## Task

Build an Express API with a Product model that can:

- Create and retrieve products
- Update stock and detect low-stock conditions

## Acceptance Criteria

- **Create Product** (`POST /products`): Accept `name`, `quantity`, and `minThreshold` in the request body and store the product in memory. Respond with the created product including a generated `id`.
- **Get All Products** (`GET /products`): Return all products. Each product in the response must include a computed `lowStock` boolean field — `true` if `quantity <= minThreshold`, otherwise `false`.
- **Update Stock** (`PATCH /products/:id/stock`): Accept a `quantity` field in the request body and update the product's quantity. Respond with the updated product including the `lowStock` field.
- **Validation:**
  - `name` must be a non-empty string
  - `quantity` and `minThreshold` must be non-negative integers
  - If a product `id` is not found, respond with HTTP `404` and `{ "error": "Product not found." }`
  - Invalid input should respond with HTTP `400` and a descriptive error message

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.