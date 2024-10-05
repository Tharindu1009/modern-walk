import Home from "../pages/home";
import Category from "../pages/category";

// routes
export const pageRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/category/:id",
        name: "Category",
        component: Category
    }
];

