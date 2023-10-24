import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root.jsx';
import ErrorPage from './error-page.jsx';
import AuthLayout from './routes/Auth/AuthLayout';
import SignIn from './routes/Auth/SignIn';
import SignUp from './routes/Auth/SignUp';
import FogotPass from './routes/Auth/FogotPass';
import ListProduct from './routes/Product/ListProduct';
import DetailProduct from './routes/Product/DetailProduct';
import ProductLayout from './routes/Product/ProductLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "products",
        element: <ProductLayout />,
        children: [
          {
            path: "list",
            element: <ListProduct />,
          },
          {
            path: ":id",
            element: <DetailProduct />,
          },
        ]
      },
    ]
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "fogotpass",
        element: <FogotPass />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
