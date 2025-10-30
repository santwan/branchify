import { Outlet } from "react-router";
import Navbar from "@/components/global/navbar/Index";
import { Suspense } from "react";
import LoadingAnimation from "@/components/ui/LoadingAnimation.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col dark:text-white dark:bg-gray-950 text-black bg-white transition-colors duration-500 ease-in-out">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4">
          <Navbar />
          <Suspense fallback={<LoadingAnimation />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Layout;
