import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layout/Auth";
import BaseLayout from "../../layout/base";
import Home from "../../pages/Home";
import ManageAccount from "../../pages/ManageAccount/Account";
const SignIn = lazy(() => import("../../pages/SignIn"));

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
  {
    path: "/manage-account/account",
    element: (
      <BaseLayout>
        <ManageAccount />
      </BaseLayout>
    ),
  },
  {
    path: "*",
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
]);
