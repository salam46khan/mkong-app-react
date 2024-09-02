import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-NormalText'>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  </StrictMode>,
)
