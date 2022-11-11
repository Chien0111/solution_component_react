import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layout/Auth";
import BaseLayout from "../../layout/base";
import Home from "../../pages/home";
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
  {
    path: "/home",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
]);
