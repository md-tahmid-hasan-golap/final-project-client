import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home";
import Coverage from "../components/Coverage";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import SendAParcel from "../components/SendAParcel";
import PrivateRouter from "./PrivateRouter";
import Error from "../Auth/Error";
import DashboardLayouts from "../Layouts/DashboardLayouts";
import MyParcel from "../components/MyParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenters.json"),
      },
      {
        path: "/sendAParcel",
        element: (
          <PrivateRouter>
            <SendAParcel></SendAParcel>
          </PrivateRouter>
        ),
        loader: () => fetch("/serviceCenters.json"),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayouts,
    children: [
      {
        path: "/signin",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayouts></DashboardLayouts>
      </PrivateRouter>
    ),
    children: [
      {
        path: "myparcel",
        Component: MyParcel,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
