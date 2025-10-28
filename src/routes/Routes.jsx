import Layout from "@/layouts/Layout"

const routesArray = [
  {
    element: <Layout />,
    errorElement: "<div>Oops! Page not found.</div>",
    children: [
      {
        path: "",
        element: ""
      }
    ]
  }
]

export default routesArray