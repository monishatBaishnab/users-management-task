import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Signin />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: 'users',
                element: <Users />
            }
        ]
    }
])

export default Route;