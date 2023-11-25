import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { AuthLayout, UserLayout, AdminLayout } from "@layouts";
import {
  ForgotPassword,
  Login,
  Signup,
  AdminLogin,
} from "@pages/Authentication";
import { Dashboard } from "@pages/User";
import { Settings, Account, Password } from "@pages/Settings";
import { AddCompany, EditCompany, Companies } from "@pages/Companies";
import { AdminDashboard, AdminUser } from "@pages/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },
        { path: "forgot-password", element: <ForgotPassword /> },
      ],
    },
    {
      path: "/adminlogin",
      element: <AdminLogin />,
    },
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "*", element: <Navigate to="/userpanel" /> },
        { path: "/userpanel", element: <Dashboard /> },

        { path: "settings", element: <Navigate to="account" /> },
        {
          path: "settings",
          element: <Settings />,
          children: [
            { path: "account", element: <Account /> },
            { path: "changepassword", element: <Password /> },
          ],
        },
        { path: "companies", element: <Companies /> },
        { path: "editCompany", element: <EditCompany /> },
        { path: "AddCompany", element: <AddCompany /> },
      ],
    },
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        { path: "*", element: <Navigate to="/dashboard" /> },
        { path: "dashboard", element: <AdminDashboard /> },
        { path: "users", element: <AdminUser /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
