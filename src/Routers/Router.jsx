import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Sppiner from "../Pages/Shared/Sppiner";
import MyBookings from "../Pages/MyBookings/MyBookings";
import PrivateRouter from "../Routes/PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Sppiner />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/rooms",
        hydrateFallbackElement: <Sppiner />,
        loader: () => fetch("http://localhost:5000/rooms"),
        Component: Rooms,
      },
      {
        path: "/roomDetails/:roomId",
        Component: RoomDetails,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },
    ],
  },
]);
export default router;
