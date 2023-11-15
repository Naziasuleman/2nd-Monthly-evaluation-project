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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Dashboard />} />
            </Route>
          </>
        )}
      </Routes>
    </Router>
  );
};
