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
import AppliedJob from './AppliedJob/AppliedJob.jsx';
import Error from './Error/Error.jsx';
import AddJob from './AddJob/AddJob.jsx';
import JobDetails from './JobDetails/JobDetails.jsx';
import AddJob2 from './AddJob2/AddJob2.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/addJob')
      },
      {
        path:'/jobs',
        element:<Jobs></Jobs>,
        loader: () => fetch('http://localhost:5000/addJob2')
      },
      {
        path:'/applied',
        element:<AppliedJob></AppliedJob>,
        loader: ({params}) => fetch(`http://localhost:5000/applyJob/${params.id}`)
      },
      {
        path:'/addJob',
        element:<AddJob></AddJob>,
      },
      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/addJob/${params.id}`)
      },
      {
        path:'/addJob2',
        element:<AddJob2></AddJob2>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
