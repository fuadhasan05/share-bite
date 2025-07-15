import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AuthProvider from "./contexts/AuthProvider";
import "./index.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AvailableFood from "./pages/AvailableFood";
import AddFood from "./pages/AddFood";
import ManageFoods from "./pages/ManageFoods";
import FoodRequest from "./pages/FoodRequest";
import PrivateRoute from "./routes/PrivateRoute";
import axios from "axios";
import FoodDetails from "./components/FoodDetails";
import UpdateFood from "./pages/UpdateFood";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => axios.get(`${import.meta.env.VITE_API_URL}/foods`),
        Component: Home,
      },
      {
        path: "available-foods",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/foods`),
        Component: AvailableFood,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "addfood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "food/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/food/${params.id}`),
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-my-food/:email",
        loader: ({ params }) =>
          axios(
            `${import.meta.env.VITE_API_URL}/manage-my-food/${params.email}`
          ),
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "my-requested-foods",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
