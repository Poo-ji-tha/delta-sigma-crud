# Delta Sigma Ventures - Fullstack User CRUD App

This is a **React + TypeScript** CRUD application for managing users, built as a test task for **Delta Sigma Ventures**. The app uses **Material UI** for component styling, **Tailwind CSS** for utility-first styling, and **Axios** for API calls.  

It demonstrates a modern frontend stack with type safety, responsive design, and modular architecture.

---

## 🛠 Features

* **CRUD Operations**: Add, Edit, Delete users
* **Prefilled Forms**: Automatically populate forms on edit
* **Form Validation**: Using **React Hook Form** + **Zod**
* **API Integration**: Axios for making HTTP requests to a **JSON-server** mock API
* **Styling**:
  * Material UI components for consistent UI
  * Tailwind CSS for utility-first responsive design
* **Responsive Design**: Works on desktop, tablet, and mobile
* **Theme Toggle**: Switch between Dark and Light modes
* **Layout**: Header and Footer for better structure
* **Type Safety**: Fully typed with TypeScript

---

## 🧰 Tech Stack

* **Frontend**:
  * React
  * TypeScript
  * React Router
  * React Hook Form + Zod
  * Material UI
  * Tailwind CSS
* **Backend**:
  * JSON-server (mock API)
  * Axios for API requests

---

## ⚙️ Installation & Setup

1. **Clone the repository**  

```bash
git clone <repo_url>
cd project-folder

Install dependencies

npm install


Start the JSON-server mock API

npm run server


Start the React application

npm run dev


Open your browser at http://localhost:5173

💻 Project Structure
src/
├─ api/            # Axios instances and API call functions
├─ components/     # Reusable React components
├─ hooks/          # Custom hooks (e.g., useForm, useFetch)
├─ pages/          # Page components (Dashboard, AddUser, EditUser)
├─ types/          # TypeScript type definitions
├─ utils/          # Helper functions (validation, payload building)
├─ App.tsx         # Root component
└─ main.tsx        # Entry point

🎨 Styling

Material UI:

Provides pre-built components like Button, TextField, Table, Dialog, etc.

Custom themes for Dark/Light mode

Tailwind CSS:

Utility classes for layout, spacing, typography, colors, and responsive design

Works alongside Material UI for extra customization

📡 API Calls

Axios is used for all HTTP requests:

GET /users → Fetch all users

POST /users → Add a new user

PUT /users/:id → Update an existing user

DELETE /users/:id → Delete a user

Axios instance is preconfigured for base URL and headers in api/axios.ts.

✅ Form Handling & Validation

React Hook Form handles form state and submission.

Zod validates inputs with a schema-based approach.

Forms are type-safe with TypeScript interfaces.

🌐 Routing

React Router v6 is used for client-side routing:

/ → User List

/add-user → Add User Form

/edit-user/:id → Edit User Form

⚡ Tips for Development

Use npm run lint to check code style and TypeScript issues.

Tailwind classes can be combined with Material UI sx prop for hybrid styling.

Custom hooks and utils are reusable across multiple forms and pages.

📖 References

React Documentation

TypeScript Documentation

Material UI

Tailwind CSS

Axios

React Hook Form

Zod

📌 Author

Poojitha – Frontend Developer


