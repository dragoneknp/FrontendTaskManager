import Home from "../Pages/Home/Home";
import Tasks from "../Pages/Tasks/tasks";
export const router = [
    {
        name: "Home",
        path: "/",
        element: Home,
        private: false,
    },
    {
        name: "Tasks",
        path: "/tasks",
        element: Tasks,
        private: false,
    },
];
