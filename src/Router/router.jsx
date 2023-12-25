import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Main-Layout/MainLayout";
import HomePage from "../Home/H-Page/HomePage";
import Login from "../Home/Login/Login";
import Register from "../Home/Login/Register/Register";
import PrivateRouter from "./PrivatesRoute";
import Dashboard from "../Main-Layout/Dashboard";
import CompletedProjects from "../Pages/Update/DashBoardRoute/CompletedProjects";
import Projects from "../Pages/Update/DashBoardRoute/Projects";
import Update from "../Pages/Update/update";
import MyTasks from "../Pages/MyTask/MyTasks";
import AboutUs from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";




const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout> ,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
                path:'/my-tasks',
                element:<MyTasks></MyTasks>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRouter><Dashboard /></PrivateRouter>,
        children:[
            {
                path:'/dashboard/projects',
                element:<CompletedProjects />
            },
            {
                path:'/dashboard/my-projects',
                element:<Projects></Projects>
            }
        ]
    },
    {
        path:'/update/:id',
        element:<Update></Update>
    }
])

export default Router;