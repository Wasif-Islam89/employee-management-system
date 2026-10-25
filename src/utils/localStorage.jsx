const employees = [
  {
    Id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page with email and password fields.",
        taskDate: "2026-10-19",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription:
          "Build a modern dashboard layout with a sidebar and top navigation.",
        taskDate: "2026-10-20",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Set Up Project",
        taskDescription:
          "Initialize the project and organize the required folders and files.",
        taskDate: "2026-10-17",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Integration",
        taskDescription:
          "Resolve the API connection issue that prevented data from loading.",
        taskDate: "2026-10-16",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Section",
        taskDescription:
          "Develop an employee profile section with editable personal details.",
        taskDate: "2026-10-21",
        category: "Development",
      },
    ],
  },
  {
    Id: 2,
    firstName: "Hamza",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription:
          "Develop a responsive landing page for the company website.",
        taskDate: "2026-10-19",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Contact Form",
        taskDescription:
          "Design a contact form with name, email, and message fields.",
        taskDate: "2026-10-20",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Navbar",
        taskDescription:
          "Improve navigation links and make the navbar responsive.",
        taskDate: "2026-10-18",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Reduce image sizes to improve website loading speed.",
        taskDate: "2026-10-15",
        category: "Optimization",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Form Validation",
        taskDescription:
          "Implement validation for required fields and invalid email addresses.",
        taskDate: "2026-10-22",
        category: "Frontend",
      },
    ],
  },
  {
    Id: 3,
    firstName: "Usman",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Employee Cards",
        taskDescription:
          "Create reusable employee cards displaying names, roles, and status.",
        taskDate: "2026-10-19",
        category: "Development",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Search Feature",
        taskDescription: "Add a search field to find employees by email or ID.",
        taskDate: "2026-10-21",
        category: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup React Router",
        taskDescription:
          "Configure routes for the dashboard and employee pages.",
        taskDate: "2026-10-17",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Responsive Layout",
        taskDescription: "Resolve layout issues on smaller mobile screens.",
        taskDate: "2026-10-16",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Filters",
        taskDescription:
          "Add category and status filters to the employee task list.",
        taskDate: "2026-10-23",
        category: "Feature",
      },
    ],
  },
  {
    Id: 4,
    firstName: "Ayesha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription:
          "Build a reports page showing employee performance and task statistics.",
        taskDate: "2026-10-20",
        category: "Analytics",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Export Feature",
        taskDescription: "Allow administrators to export employee reports.",
        taskDate: "2026-10-22",
        category: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Task Summary",
        taskDescription:
          "Display total, completed, active, and failed task counts.",
        taskDate: "2026-10-18",
        category: "Analytics",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Report Calculations",
        taskDescription:
          "Correct the totals displayed in the employee performance report.",
        taskDate: "2026-10-16",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Improve Data Tables",
        taskDescription:
          "Improve table readability and add sorting functionality.",
        taskDate: "2026-10-24",
        category: "UI Improvement",
      },
    ],
  },
  {
    Id: 5,
    firstName: "Fatima",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Settings Page",
        taskDescription:
          "Create a settings page for managing employee preferences.",
        taskDate: "2026-10-19",
        category: "Frontend",
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Add Theme Toggle",
        taskDescription:
          "Implement a light and dark mode toggle for the dashboard.",
        taskDate: "2026-10-21",
        category: "Feature",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Notifications",
        taskDescription: "Build a notification component for system messages.",
        taskDate: "2026-10-17",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix State Management",
        taskDescription:
          "Resolve inconsistent task status updates across components.",
        taskDate: "2026-10-16",
        category: "Bug Fix",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Dashboard",
        taskDescription:
          "Test dashboard interactions and verify task status counters.",
        taskDate: "2026-10-25",
        category: "Testing",
      },
    ],
  },
];

const admin = [
  {
    Id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
