import {
    createBrowserRouter,

} from "react-router-dom";

import MainLayouts from "../Layouts/MainLayouts";
import Home from "../components/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import MyBookings from "../pages/MyBookings/MyBookings";

import ContactUs from './../pages/ContactUs/ContactUs';
import AboutUs from './../pages/AboutUs/AboutUs';
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoutes from "./PrivateRoutes";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Error from "../ErrorPage/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch(`https://roomly-server-assignment11.vercel.app/rooms/`)
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,

            },
            {
                path: '/my-bookings',
                element: <PrivateRoutes>
                    <MyBookings></MyBookings>
                </PrivateRoutes>,
                
                
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/room-details/:id',
                element: <PrivateRoutes>
                    <RoomDetails></RoomDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://roomly-server-assignment11.vercel.app/room-details/${params.id}`, {credentials: 'include'})
            }

        ]
    },
]);

export default router;