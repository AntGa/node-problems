# Backend - Banking App

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 20 Minutes

---

## Overview

You are building a banking API where users can set a PIN for their card. The PIN must meet security requirements to ensure it is valid, secure, and not easily guessable.

## Task

Build an Express app and implement a `POST /pin` endpoint that validates a PIN submitted by the user against the acceptance criteria below.

## Acceptance Criteria

- **PIN Length:** The PIN should be exactly 4 digits long
- **Numbers Only:** The PIN should contain only numerical digits, with no letters or symbols
- **No Repeating Digits:** All 4 digits in the PIN must be different (e.g., `1234` is valid, but `1111` or `2223` is not)
- **Positive Number:** The PIN cannot be a negative number

## Endpoints

- **`POST /pin`** — Validate and set a new PIN
  - Request body: `{ "pin": <string or number> }`
  - On success: HTTP `200` and `{ "message": "PIN successfully set." }`
  - On failure: HTTP `400` and `{ "error": "<reason>" }` describing which rule was violated

## Validation Error Messages

| Rule violated | Error message |
|---|---|
| Missing pin | `"PIN is required."` |
| Not exactly 4 digits | `"PIN must be exactly 4 digits long."` |
| Contains non-numeric characters | `"PIN must contain only numerical digits."` |
| Negative number | `"PIN cannot be a negative number."` |
| Repeating digits | `"PIN must have all unique digits."` |

## Technical Considerations

- Accept `pin` as either a string or number in the request body — normalize to string for validation
- Validate in the order listed above (length check before uniqueness check)
- No storage required — just validate and respond

## Example Input / Output

Sample requests are in **`examples/data.js`**. Start your server, run `node examples/data.js`, then record the responses in **`examples/output.json`**.

## Where to Store Your Work

Write your solution in the following files:

- **`src/routes/pin.js`** — implement the `POST /pin` route handler and validation logic
- **`src/app.js`** — register the pin router
