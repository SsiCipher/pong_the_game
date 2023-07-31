import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
// import App from './App.tsx'

import './styles/index.css' 
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
