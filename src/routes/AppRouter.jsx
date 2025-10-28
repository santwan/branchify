import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"

import routesArray from "@/routes/Routes.jsx"

// creating router using createBrowserRouter function 
// it takes an routesArray
const router = createBrowserRouter(routesArray)

export default function AppRouter (){

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}