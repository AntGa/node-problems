# Node.js Practice Problems

A collection of backend coding challenges to practice building REST APIs with **Node.js** and **Express**. Each problem is self-contained with a problem statement, a scaffolded starter app, and a test suite to verify your solution.

These are designed to simulate the format and difficulty of timed backend assessments.

---

## Problems

| # | Folder | Topic | Duration |
|---|--------|--------|----------|
| 1 | `problem1-rate-limiter` | API Rate Limiter — in-memory request tracking, 429 responses | 30 min |
| 2 | `problem2-inventory-tracker` | Inventory Tracker — CRUD with computed `lowStock` field | 30 min |
| 3 | `problem3-task-scheduler` | Task Scheduler — urgency score calculation with priority + due date | 30 min |
| 4 | `problem4-dynamic-pricing-engine` | Dynamic Pricing Engine — seasonal and demand multipliers | 30 min |
| 5 | `problem5-travel-accommodation-marketplace` | Accommodation Marketplace — viewCount and popularityScore tracking | 30 min |
| 6 | `problem6-banking-app` | Banking App — PIN validation with multiple rules | 20 min |

---

## How to Use

Each folder contains:

```
problemN-<name>/
├── PROBLEM.md        ← read this first: problem statement and acceptance criteria
├── package.json
└── src/
    ├── index.js
    ├── app.js
    ├── routes/       ← implement your solution here (TODO comments mark the spots)
    └── __tests__/    ← run these to check your work
```

### Getting started

```bash
cd problemN-<name>
npm install
npm run dev        # start the dev server with auto-reload
npm test           # run the test suite
```

---

## Skills Practiced

- Express routing and middleware
- In-memory data management
- Input validation and error handling
- Computed fields and business logic
- REST API design conventions
