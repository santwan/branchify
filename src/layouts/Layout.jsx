import { Outlet } from "react-router"



const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      // render navbar here

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <Outlet/>

        </div>
      </main>

    </div>
  )
}

export default Layout