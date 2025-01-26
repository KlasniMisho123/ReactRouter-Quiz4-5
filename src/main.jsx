import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet /> 
    </main>
    <Footer />
  </>
);

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "", 
      element: <Hero />, 
    },
    {
      path: "gallery",
      element: <Gallery />, 
    },
    {
      path: "profile",
      children: [
        {
          path: "",
          element: <Profile />,
        },
        {
          path: ":username",
          element: <Profile />,
        },
      ],
    },
  ],
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
