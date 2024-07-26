import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Jobs from './Jobs/Jobs.jsx';
import Blogs from './Blogs/Blogs.jsx';
import AppliedJob from './AppliedJob/AppliedJob.jsx';
import Error from './Error/Error.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>,
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
