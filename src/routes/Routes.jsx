import React from "react"
import Layout from "@/layouts/Layout"
import { lazyLoadWithMinDuration } from "@/utils/lazyLoadWithMinDuration"
const Home = lazyLoadWithMinDuration( () => import ("@/pages/home/Home") )
const JsonInput = lazyLoadWithMinDuration( () => import("@/pages/json-input/JsonInput"))
const JsonEditor = lazyLoadWithMinDuration(() => import("@/pages/json-editor/JsonEditor"))

const routesArray = [
  {
    element: <Layout />,
    errorElement: "<div>Oops! Page not found.</div>",
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/json-input",
        element: <JsonInput/>
      
      },
      {
        path: "/json-input/json-editor",
        element: <JsonEditor />
      }
    ]
  }
]

export default routesArray