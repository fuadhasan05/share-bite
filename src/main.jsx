import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import AuthProvider from './contexts/AuthProvider'
import './index.css'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AvailableFood from './pages/AvailableFood'
import AddFood from './pages/AddFood'
import ManageFoods from './pages/ManageFoods'
import FoodRequest from './pages/FoodRequest'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'available-foods',
        Component: AvailableFood,
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'addfood',
        element: <AddFood></AddFood>,
      },
      {
        path: 'manage-my-food',
        element: <ManageFoods></ManageFoods>,
      },
      {
        path: 'my-food-request',
        element: <FoodRequest></FoodRequest>
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
