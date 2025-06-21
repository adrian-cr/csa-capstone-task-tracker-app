# Capstone Project: Task Tracker Application
This capstone project features a fully functional and responsive task tracker app built with `React` and `Material-UI`, featuring task management, local storage persistence, and intuitive UI interactions.

## Core Features
* **Task Management**: Add, edit, delete tasks with titles and descriptions.
* **Task Status**: Mark tasks as completed or pending.
* **Responsive Design**: Optimized for both mobile and desktop views.
* **Persistent Storage**: Tasks are saved in `localStorage` for data persistence.
* **Global State Management**: Uses `Context API` for managing tasks globally.
* **Form Validation**: Ensures required fields are filled before submission.
* **User-Friendly UI**: Built with `Material-UI` for a modern look and feel.
* **Routing**: Uses `React Router` for navigation between pages.
* **Error Handling**: Displays error messages for validation issues.

## Technologies Used
* HTML5
* CSS3
* JavaScript (ES6)
* React
* Material-UI
* UUID
* Context API

## Core File Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── TaskCard.jsx
│   ├── TaskList.jsx
│   └── TaskForm.jsx
├── context/
│   └── TaskContext.jsx
├── pages/
│   ├── AddTask.jsx
│   ├── Dashboard.jsx
│   └── TaskDetails.jsx
├── styles.css
├── App.jsx
└── index.js
```

## Site Pages
This app consists of three main pages:
### 1. `AddTask`
* Features a form to add new tasks.
* Uses `TaskForm` component for input fields.
* Validates task title (required field).
* Submits task data to `TaskContext` for global state management.
* Navigates back to `Dashboard` after adding a task.
* Uses `useNavigate()` from React Router for navigation.
* Displays error messages for validation issues using Material-UI Alerts.

### 2. `Dashboard`
* Displays created tasks.
* Features filter buttons for "All", "Completed", and "Pending" tasks.
* Each task is displayed as a `TaskCard`.
* Clicking a task navigates to `TaskDetails` page.
* Uses `TaskContext` for global state management.
* Provides a button to add a new task, navigating to `AddTask` page.
* Uses `useEffect()` to load tasks from `localStorage` on mount.

### 3. `Task Details`
* Displays detailed information about a selected task.
* Shows task title, description, and status.
* Provides options to edit, complete, or delete the task.
* Uses `TaskContext` to fetch task data and perform actions.
* "Save Task" button updates the task in global state and `localStorage`.
* "Delete Task" button removes the task from global state and `localStorage`.

## Components
Each page is composed of several of the following reusable components:
* `Header` – Displays the app logo.
* `TaskCard` – Displays a task with title, description, and status.
* `TaskList` – Renders list of `TaskCard` components.
* `TaskForm` – Used to add/edit task data with validation.
* `TaskContext` – Global state with functions `addTask()`, `updateTask()`, and `deleteTask()`.

## State Management
* Uses `React`'s `useState()` and `useEffect()` for local state.
* Context API provides task operations and syncs with `localStorage`.

## Data Persistence
* Tasks are saved in `localStorage`.
* Automatically reloaded on page refresh.
* No backend required.

## Responsive Design
* Built with Material-UI Grid and Flexbox utilities.
* Fully responsive from mobile to desktop.

## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/adrian-cr/csa-capstone-task-tracker-app
cd csa-capstone-task-tracker-app
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.
