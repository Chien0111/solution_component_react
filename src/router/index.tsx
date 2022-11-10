import { RouterProvider } from "react-router-dom";
import { Pulicrouter } from "./public";

const Router = () => {
  return (
    <>
      <RouterProvider router={Pulicrouter} />
    </>
  );
};

export default Router;
