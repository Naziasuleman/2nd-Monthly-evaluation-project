// sidebarData.js

import {
  Dashboard,
  Task,
  Calendar,
  Trips,
  Companies,
  Settings,
  Users,
} from "@images";

export const sidebarData = [
  { id: 1, icon: Dashboard, text: "Dashboard", link: "/admin/dashboard" },
  { id: 2, icon: Task, text: "Tasks", link: "/tasks" },
  { id: 3, icon: Calendar, text: "Calendar", link: "/Calendar" },
  { id: 4, icon: Trips, text: "Trips", link: "/trips" },
  { id: 8, icon: Users, text: "Users", link: "/admin/users" },
];

export const companiesData = [
  { id: 5, icon: Companies, text: "Companies", link: "/companies" },
];

export const settingsData = [
  { id: 6, icon: Settings, text: "Settings", link: "/settings" },
];
