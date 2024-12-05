import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './Root/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import PrivateRoutes from './Routes/PrivateRoutes';

import Dashboard from './Pages/Dashboard/Dashboard';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EquipmentDetails from './Pages/EquipmentDetails/EquipmentDetails';
import Profile from './Pages/Profile/Profile';
import AllSportsEquipments from './Pages/AllSportsEquipments/AllSportsEquipments';
import UpdateEquipment from './Pages/UpdateEquipment/UpdateEquipment';
import AddEquipment from './Components/AddEquipment/AddEquipment';
import MyEquipmentsList from './Components/MyEquipmentsList/MyEquipmentsList';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allsportsequipments",
        element: <AllSportsEquipments></AllSportsEquipments>,
        loader: () => fetch(`http://localhost:5000/api/equipments/`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes> 
      },
      
      {
        path: "/addequipment",
        element: <PrivateRoutes><AddEquipment></AddEquipment></PrivateRoutes> 
      },
      {
        path: "/myequipmentlist",
        element: <PrivateRoutes><MyEquipmentsList></MyEquipmentsList></PrivateRoutes> 
      },
      {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes> 
      },
      {
        path: "/equipmentdetails/:equipment_id",
        element: <PrivateRoutes><EquipmentDetails></EquipmentDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/api/equipments/${params.equipment_id}`)
      },
      {
        path: "/updateequipment/:equipment_id",
        element: <PrivateRoutes><UpdateEquipment></UpdateEquipment></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/api/equipments/${params.equipment_id}`)
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
