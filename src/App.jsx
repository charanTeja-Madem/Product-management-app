import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../components/RootLayout'
import ProductList from '../components/ProductList'
import Contactus from '../components/Contactus'
import Home from '../components/Home'
import Product from '../components/Product'

function App() {
  const routerObj = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'product-list', element: <ProductList /> },
        { path: 'product', element: <Product /> },
        { path: 'contactus', element: <Contactus /> },
      ],
    },
  ])

  return <RouterProvider router={routerObj} />
}

export default App
