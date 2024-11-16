import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import CategoryNews from "../components/pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";
import NewsDetails from "../components/pages/NewsDetails";
import SecretRoutes from "./SecretRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: "/news/:id",
        element: <SecretRoutes><NewsDetails></NewsDetails></SecretRoutes>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Registration></Registration>,
            },
        ],
    },
    {
        path: "*",
        element: <h2>Error</h2>,
    },
],
{
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionStatusRevalidation: true
    },
  }
);

export default router;