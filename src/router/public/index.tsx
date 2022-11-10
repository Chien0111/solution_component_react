import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layout/Auth";
const SignIn = lazy(() => import("../../pages/signIn"));

export const Pulicrouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
]);
