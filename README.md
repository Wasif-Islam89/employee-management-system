# 💼 Employee Management System (EMS)

A modern, responsive, and full-featured Employee Management System built with React.js, Vite, and Tailwind CSS. It provides role-based dashboards for Administrators and Employees to manage, track, and update workspace tasks efficiently with a clean and professional Blue & White theme.

---

## Key Features

### 🔐 1. Role-Based Authentication
- Dual Portal Access: Single login screen intelligently authenticates both Administrators and Employees.
- Session Persistence: Saves logged-in user credentials and role in localStorage.
- Preloaded Demo Credentials:
  - Admin: `admin@me.com` | Password: `123`
  - Employee: `employee1@example.com` (to `employee5@example.com`) | Password: `123`

### 👑 2. Admin Dashboard
- Welcome Navigation Bar: Displays personalized greetings, status indicator, and quick logout.
- Task Creation & Assignment Form:
  - Assign tasks to specific employees by name.
  - Set task title, category (Development, Design, Bug Fix, etc.), deadline date, and comprehensive task description.
- Team-Wide Task Overview:
  - Live summary table tracking every team member.
  - Real-time task counter breakdown: New Tasks, Active Tasks, Completed Tasks, and Failed Tasks.

### 👨‍💻 3. Employee Dashboard
- Personalized Header: Greets the employee by first name with dynamic user avatar initials.
- Statistics Cards: Modern metric cards displaying live counts for New Tasks, Accepted / In-Progress Tasks, Completed Tasks, and Failed Tasks.
- Horizontal Task Carousel:
  - Smooth horizontal scrolling for task cards.
  - Category badges, scheduled due dates, titles, and descriptions.
  - Interactive action buttons for employees to Accept, Mark as Completed, or Mark as Failed.

---

## 🎨 Design & Color System (Blue & White Theme)

The application has been styled with an enterprise-grade Blue & White color palette for high contrast, clean hierarchy, and modern aesthetics:

| Token | Hex Code | Role in Interface |
|---|---|---|
| Primary Blue | `#2563EB` | Primary buttons, active badges, key accents |
| Dark Blue | `#1D4ED8` | Button hover states, deep interactive elements |
| Light Blue | `#DBEAFE` | Badge backgrounds, avatar pills, icon containers |
| Main Background | `#F1F5F9` | Slate background providing comfortable contrast |
| Cards & Panels | `#FFFFFF` | Elevated white surfaces, forms, and cards |
| Main Text | `#1E293B` | High-contrast dark slate for headings & primary copy |
| Secondary Text | `#64748B` | Subtle slate for descriptions, timestamps & labels |
| Borders & Dividers | `#E2E8F0` | Clean, subtle borders and section separators |

### 🔤 Typography & UX Details
- Font: Google's Inter font family for clean readability across all devices.
- Micro-interactions: Subtle hover elevations, tactile button click effects (`active:scale-95`), and tailored smooth scrollbars.

---

## 🛠️ Tech Stack

- Frontend Framework: [React 19](https://react.dev/)
- Build Tool: [Vite](https://vitejs.dev/)
- Styling: [Tailwind CSS v4](https://tailwindcss.com/)
- State Management: React Context API (`AuthProvider`), React Hooks (`useState`, `useEffect`, `useContext`)
- Storage: Browser `localStorage` for offline persistence

---

## 📂 Project Structure

```text
employee-management-system/
├── public/                 # Static assets & favicon
├── src/
│   ├── assets/             # Images and design assets
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx           # Clean card-based login portal
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx  # Admin management view
│   │   │   └── EmployeeDasboard.jsx# Employee dashboard view
│   │   ├── TaskList/
│   │   │   ├── TaskList.jsx        # Horizontal scroll container
│   │   │   ├── AcceptTask.jsx      # Active/in-progress task card
│   │   │   ├── NewTask.jsx         # New incoming task card
│   │   │   ├── CompleteTask.jsx    # Completed task card
│   │   │   └── FailedTask.jsx      # Failed task card
│   │   └── other/
│   │       ├── Header.jsx          # Top navigation bar with logout
│   │       ├── CreateTask.jsx      # Task assignment form
│   │       ├── AllTask.jsx         # Team task overview table
│   │       └── TaskListNumber.jsx  # 4-column metric statistics cards
│   ├── context/
│   │   └── AuthProvider.jsx        # Global authentication & data context
│   ├── utils/
│   │   └── localStorage.jsx        # Mock employee dataset & persistence
│   ├── App.jsx                     # Root router & role controller
│   ├── index.css                   # Tailwind v4 imports & custom scrollbar styles
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML template with Google Inter font
├── package.json                    # Project dependencies and scripts
└── vite.config.js                  # Vite & Tailwind configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/Wasif-Islam89/employee-management-system
cd employee-management-system
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```

---

## 🔑 Login Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@me.com` | `123` |
| Employee 1 | `employee1@example.com` | `123` |
| Employee 2 | `employee2@example.com` | `123` |
| Employee 3 | `employee3@example.com` | `123` |
| Employee 4 | `employee4@example.com` | `123` |
| Employee 5 | `employee5@example.com` | `123` |

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
