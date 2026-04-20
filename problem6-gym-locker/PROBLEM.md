# Backend - Gym Locker

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 20 Minutes

---

## Overview

You are building a gym management API where members can set a locker access code. The code must meet security requirements to ensure it is valid, secure, and not easily guessable.

## Task

Build an Express app and implement a `POST /locker-code` endpoint that validates an access code submitted by the member against the acceptance criteria below.

## Acceptance Criteria

- **Code Length:** The code should be exactly 4 digits long
- **Numbers Only:** The code should contain only numerical digits, with no letters or symbols
- **No Repeating Digits:** All 4 digits in the code must be different (e.g., `1234` is valid, but `1111` or `2223` is not)
- **Positive Number:** The code cannot be a negative number

## Endpoints

- **`POST /locker-code`** — Validate and set a new locker code
  - Request body: `{ "code": <string or number> }`
  - On success: HTTP `200` and `{ "message": "Locker code successfully set." }`
  - On failure: HTTP `400` and `{ "error": "<reason>" }` describing which rule was violated

## Validation Error Messages

| Rule violated | Error message |
|---|---|
| Missing code | `"Code is required."` |
| Not exactly 4 digits | `"Code must be exactly 4 digits long."` |
| Contains non-numeric characters | `"Code must contain only numerical digits."` |
| Negative number | `"Code cannot be a negative number."` |
| Repeating digits | `"Code must have all unique digits."` |

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.
