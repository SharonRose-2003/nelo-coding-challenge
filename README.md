# NELO Task Manager – React Assessment

This is my submission for the **NELO React.js / Node.js Assessment**.  
The project implements a complete Task Manager application using **React**, **Vite**, **Tailwind CSS**, **React Router**, and **custom hooks**.

All requirements from the assessment document (`/mnt/data/assessment.docx`) have been fully implemented.

---

## 🚀 Live Features Demonstrated

### ✔ Login System (sessionStorage)
- Simple email/password login
- Session persists until browser tab is closed
- Redirects to Task Dashboard after login

### ✔ Task CRUD Operations
- **Create** tasks with:
  - Title *(required)*
  - Description
  - Priority (Low / Medium / High)
  - Due Date
- **Read** and view all tasks
- **Update** tasks (inline form editing)
- **Delete** tasks (with confirm dialog)
- **Toggle complete/pending**

### ✔ Search with Debouncing
- Case-insensitive substring searching
- Uses `setTimeout` based custom debounce hook
- Prevents excessive re-renders

### ✔ Filters
- All
- Completed
- Pending
- Priority-based filters (High, Medium, Low)

### ✔ LocalStorage + SessionStorage
- Tasks are saved even after refresh
- Logged-in session remains active

### ✔ Cron-style Task Automation
- Every 20 minutes a background simulated cron job:
  - Fetches all tasks
  - Logs pending tasks to console (mock email alerts)
- Can be temporarily reduced to 5 seconds for demo

---

## 📂 Project Structure

