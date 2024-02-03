import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={Route} />
  </React.StrictMode>,
)
