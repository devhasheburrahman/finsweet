import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Layout from './Components/Layout/index.jsx';
import Blog from './pages/Blog/Blog.jsx';
import BlogPost from './pages/BlogPost/BlogPost.jsx';
import About from './pages/About/About.jsx';
import Category from './pages/Category/Category.jsx';
import Privacy from './pages/Privacy/Privacy.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Author from './pages/Author/Author';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/blogpost',
        element: <BlogPost />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/category',
        element: <Category />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/author',
        element: <Author />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
