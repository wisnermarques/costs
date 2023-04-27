import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//1- configurando router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home'
import Contact from './routes/Contact'
import Company from './routes/Company'
import NewProject from './routes/NewProject'
import Projects from './routes/Projects'
import Project from './routes/Project'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/contact',
//     element: <Contact />
//   }
// ])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/',
        element: <Home />
      },
      { 
        path: '/projects',
        element: <Projects />
      },
      { 
        path: '/project/:id',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/company',
        element: <Company />
      },
      {
        path: '/newproject',
        element: <NewProject />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
