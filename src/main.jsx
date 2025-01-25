import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Hero />,
  errorElement: <div> ERROR PAGE </div>,
},
{
  path: "gallery",
  element: <Gallery />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
