import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { AuthLayout } from "@layouts";
import {
  ForgotPassword,
  Login,
  Signup,
  AdminLogin,
} from "@pages/Authentication";

const router = createBrowserRouter(
  createRoutesFromElements(
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
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
