# Backend - Task Scheduler

**Difficulty:** Easy
**Skills:** Node.js (Basic)
**Recommended Duration:** 30 Minutes

---

## Overview

This is a task management application. We want to allow users to create tasks with due dates and priorities, and retrieve them in a meaningful order based on urgency and importance.

## Task

Build an Express API with a Task model that can:

- Create tasks with a due date and priority level
- Retrieve tasks sorted by urgency score

## Acceptance Criteria

- **Create Task** (`POST /tasks`): Accept `title`, `dueDate` (ISO 8601 date string, e.g. `"2026-05-01"`), and `priority` (`"low"`, `"medium"`, or `"high"`). Store and return the task with a generated `id`.
- **Get All Tasks** (`GET /tasks`): Return all tasks sorted by `urgencyScore` descending. Each task in the response must include the computed `urgencyScore`.
- **Urgency Score Calculation:** Compute score using the following rules:
  - **Priority Points:** `high` = 30, `medium` = 20, `low` = 10
  - **Due Date Points:** Tasks due within 1 day = +50, within 3 days = +30, within 7 days = +15, more than 7 days away = +0
  - **Overdue Bonus:** If the task's `dueDate` is in the past, add +20 on top of the due date points
  - `urgencyScore = priorityPoints + dueDatePoints + overdueBonus`
- **Validation:**
  - `title` must be a non-empty string
  - `dueDate` must be a valid date string
  - `priority` must be one of `"low"`, `"medium"`, `"high"`
  - Invalid input should respond with HTTP `400` and a descriptive error message

## Technical Considerations

- Use an in-memory array — no database required
- `urgencyScore` is computed at read time using today's date — do not store it
- Due date comparison should be based on the start of the day (midnight), not exact time

## Example Input / Output

**`examples/data.js`** shows example request shapes to use when manually testing your API.

## Where to Store Your Work

Write your solution in the following files:

- **`src/routes/tasks.js`** — implement all task route handlers and urgency score logic
- **`src/app.js`** — register the tasks router
