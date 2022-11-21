import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layout/Auth";
import BaseLayout from "../../layout/base";
import ManageAccount from "../../pages/ManageAccount/Account";
import Home from "../../pages/ManageGeneral/Home";
import SignIn from "../../pages/ManageGeneral/SignIn";
import ReprotContainer from "../../pages/ManageReport";

export const Pulicrouter = createBrowserRouter([
  {
    path: "/sinIn",
    element: (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    ),
  },
  {
    path: "/",
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
    path: "/report-test",
    element: (
      <BaseLayout>
        <ReprotContainer />
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
