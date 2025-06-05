import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        errorElement:<Error/>,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login
            }
        ]
    }
])
export default router;