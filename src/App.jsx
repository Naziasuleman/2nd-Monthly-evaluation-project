import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthLayout, UserLayout } from "@layouts";
import {
  ForgotPassword,
  Login,
  Signup,
  AdminLogin,
} from "@pages/Authentication";
import { Dashboard } from "@pages/User";
import { Settings, Account, Password } from "@pages/Settings";
import { AddCompany, EditCompany, Companies } from "@pages/Companies";

export const App = () => {
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Route>
            <Route path="/admin" element={<AdminLogin />} />
          </>
        ) : (
          <>
            <Route element={<UserLayout />}>
              <Route index path="/dashboard" element={<Dashboard />} />
              <Route index path="/companies" element={<Companies />} />
              <Route index path="/AddCompany" element={<AddCompany />} />
              <Route index path="/editCompany" element={<EditCompany />} />
              <Route path="/settings/*" element={<Settings />}>
                <Route path="account" element={<Account />} />
                <Route path="changepassword" element={<Password />} />
                <Route path="*" element={<Navigate to="account" />} />
              </Route>
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
};
