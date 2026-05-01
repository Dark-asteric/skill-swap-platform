import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/Register";
import { AuthLayout } from "../layouts/AuthLayout";
import Home from "../components/Home";
import AllSkills from "../components/AllSkills";
import Contactus from "../components/Contactus";
import AboutUs from "../components/AboutUs";
import SkillsDetails from "../components/SkillsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "/skills",
                Component: AllSkills,
            },
            {
                path: "/skills/:id",
                Component: SkillsDetails,
            },
            {
                path: "/contact",
                Component: Contactus,
            },
            {
                path: "/about",
                Component: AboutUs,
            }
        ]
    },
    {
        path:"/auth",
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path :"/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>,
    },
]);

export default router;