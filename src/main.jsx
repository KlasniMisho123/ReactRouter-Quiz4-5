import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Profile from './components/Profile.jsx';


const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([{
  path: "/",
  element: (
    <Layout>
      <Hero />
    </Layout>
  ),
  errorElement:(
    <Layout>
      <div> Error Page </div>
    </Layout>
  ),
},
{
  path: "gallery",
  element: (
    <Layout>
      <Gallery/>
    </Layout>
  ),
},{
  path: "profile",
  element: (
    <Layout>
      <Profile/>
    </Layout>
  ),
}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
