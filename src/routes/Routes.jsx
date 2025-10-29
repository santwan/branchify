import React from "react"
import Layout from "@/layouts/Layout"
import { lazyLoadWithMinDuration } from "@/utils/lazyLoadWithMinDuration"
const Home = lazyLoadWithMinDuration( () => import ("@/pages/home/Home") )

const routesArray = [
  {
    element: <Layout />,
    errorElement: "<div>Oops! Page not found.</div>",
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]

export default routesArray