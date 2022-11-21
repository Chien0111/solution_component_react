import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layout/Auth";
import BaseLayout from "../../layout/base";
// import Home from "../../pages/Home";

import ManageAccount from "../../pages/ManageAccount/Account";
import ReprotContainer from "../../pages/ManageReport";
// import SignIn from "../../pages/SignIn";

export const Pulicrouter = createBrowserRouter([
  {
    path: "/sinIn",
    element: (
      <AuthLayout>
        <ManageAccount />
      </AuthLayout>
    ),
  },
  {
    path: "/",
    element: (
      <BaseLayout>
        <ManageAccount />
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
        <ManageAccount />
      </BaseLayout>
    ),
  },
]);
