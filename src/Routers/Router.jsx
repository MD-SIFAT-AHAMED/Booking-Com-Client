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
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <Sppiner />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/rooms",
        hydrateFallbackElement: <Sppiner />,
        element: <Rooms />,
      },
      {
        path: "/roomDetails/:roomId",
        hydrateFallbackElement: <Sppiner />,
        element: <RoomDetails />,
      },
      {
        path: "/myBookings",
        hydrateFallbackElement: <Sppiner />,
        element: (
          <PrivateRouter>
            <MyBookings />
          </PrivateRouter>
        ),
      },
      {
        path:'/aboutUs',
        element:<AboutUs/>
      },
      {
        path:'/contactUs',
        element:<ContactUs/>
      }
    ],
  },
]);
export default router;
