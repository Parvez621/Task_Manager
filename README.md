# TaskFlow

## Project Title & Brief Description

**TaskFlow** is a full-stack task management application built as part of the Graphene assessment. The application allows a user to create, view, update, delete, search, and filter personal tasks. Tasks can be marked as complete or incomplete, edited at any time, and persist across browser refreshes and server restarts through SQLite database storage. The project follows a React frontend and Express backend architecture with RESTful APIs and SQLite for persistence.

---

## Live Demo Links

https://task-manager-seven-sigma-59.vercel.app/

---

## Tech Stack

### Frontend

* **React**

  * Component-based UI development.
  * Functional components with Hooks (`useState`, `useEffect`).

* **Vite**

  * Fast development server and build tool.
  * Lightweight alternative to Create React App.

* **Tailwind CSS**

  * Utility-first CSS framework.
  * Rapid styling and responsive design.

### Backend

* **Node.js**

  * JavaScript runtime for backend development.

* **Express.js**

  * REST API development.
  * Routing and middleware handling.

### Database

* **SQLite**

  * Lightweight relational database.
  * No external database server required.
  * Data persists across server restarts.

### Development Tools

* **Nodemon**

  * Automatic backend server restart during development.

* **Postman**

  * API testing and validation.

* **Git & GitHub**

  * Version control and project hosting.

---

## Features

### Core Features

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks with confirmation
* Mark tasks as completed/incomplete
* Search tasks by title
* Filter tasks by:

  * All
  * Active
  * Completed

### Additional Features

* Active vs Completed task statistics
* Overdue task highlighting
* Empty state UI
* Persistent storage using SQLite
* RESTful API architecture

---

## How to Run Locally

### Prerequisites

Install:

* Node.js (v18 or above recommended)

---

### Clone Repository

```bash
git clone <repository-url>
cd Task_Manager
```

---

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

### Frontend Setup

Open another terminal:

```bash
cd frontend

npm install

npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

### Database

SQLite database file:

```text
backend/tasks.db
```

The database and tables are created automatically on first startup.

---

## API Documentation

Base URL:

```text
http://localhost:5000/api/tasks
```

---

### Get All Tasks

**Method**

```http
GET /api/tasks
```

**Response**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Learn React",
      "description": "Study hooks",
      "dueDate": "2026-06-15",
      "completed": 0,
      "createdAt": "2026-06-06"
    }
  ]
}
```

---

### Create Task

**Method**

```http
POST /api/tasks
```

**Request Body**

```json
{
  "title": "Learn Express",
  "description": "Build APIs",
  "dueDate": "2026-06-20"
}
```

**Response**

```json
{
  "success": true,
  "id": 1
}
```

---

### Update Task

**Method**

```http
PUT /api/tasks/:id
```

**Request Body**

```json
{
  "title": "Master Express",
  "description": "Advanced backend",
  "dueDate": "2026-07-01"
}
```

**Response**

```json
{
  "success": true,
  "message": "Task updated"
}
```

---

### Toggle Task Completion

**Method**

```http
PATCH /api/tasks/:id/toggle
```

**Response**

```json
{
  "success": true,
  "message": "Task updated"
}
```

---

### Delete Task

**Method**

```http
DELETE /api/tasks/:id
```

**Response**

```json
{
  "success": true,
  "message": "Task deleted"
}
```

---

## Project Structure

```text
Task_Manager
│
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskList.jsx
│   │   │   ├── FilterBar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── StatsBar.jsx
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── pages
│   │   │   └── Home.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── taskController.js
│   │   │
│   │   ├── routes
│   │   │   └── taskRoutes.js
│   │   │
│   │   ├── database
│   │   │   └── db.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tasks.db
│   └── package.json
│
└── README.md
```

---

## Design Decisions

* Functional React components were used instead of class components to leverage Hooks and modern React patterns.
* SQLite was chosen because it satisfies persistence requirements without requiring external database setup.
* API calls were abstracted into a dedicated service layer (`api.js`) to separate UI logic from network communication.
* Express controllers were separated from routes to improve maintainability and scalability.

---

## Next Steps

Given more time, the following improvements could be implemented:

* Drag-and-drop task reordering
* Unit and integration testing
* Task categories and tags
* Task priority levels
* Pagination for large task lists
* Docker containerization
* User authentication and authorization
* Production deployment with CI/CD
* Improved error handling and validation
* Dark mode support

---
## Development Notes

This project was developed as a learning-focused full-stack exercise using React, Express, and SQLite. As I was relatively new to React and Node.js development when starting the assessment, I used AI-assisted development tools for guidance, debugging support, implementation suggestions, and learning best practices.

All architectural decisions, integration work, testing, debugging, and final implementation were completed and verified by me. I made an effort to understand each part of the codebase, including React state management, component interactions, REST API design, Express routing, controller architecture, and SQLite database operations.

I view AI as a development and learning tool, similar to documentation, tutorials, or technical references, and I can explain the implementation details and design decisions used throughout the project.


## Author

Parvez Saifi

Built as part of the Graphene Full-Stack Assessment.
