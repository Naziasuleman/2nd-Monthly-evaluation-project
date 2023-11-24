import {
  BrowserRouter as Router,
  Route,
  Routes,
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

export const App = () => {
  return (
    <Router>
      <Routes>
        <>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/adminlogin" element={<AdminLogin />} />

          <Route element={<UserLayout />}>
            <Route index path="/*" element={<Dashboard />} />
            <Route index path="/companies" element={<Companies />} />
            <Route index path="/AddCompany" element={<AddCompany />} />
            <Route index path="/editCompany" element={<EditCompany />} />
            <Route path="/settings/*" element={<Settings />}>
              <Route path="account" element={<Account />} />
              <Route path="changepassword" element={<Password />} />
              <Route path="*" element={<Navigate to="account" />} />
            </Route>
          </Route>
          <Route element={<AdminLayout />}>
            <Route index path="/*" element={<Dashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/users" element={<AdminUser />} />
          </Route>
        </>
      </Routes>
    </Router>
  );
};
