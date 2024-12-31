import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <div className="bg-slate-50 w-[40%] sm:w-[16%] md:w-[12%] lg:w-[12%]">
          <Menubar />
        </div>
        <div className="bg-green-300 w-[60%] sm:w-[84%] md:w-[88%] lg:w-[88%] relative">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
