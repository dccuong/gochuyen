import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

type Props = {};
const scroll = () => {
  window.scrollTo(0, 0);
};
const Layout = (props: Props) => {
  return (
    <div className="relative">
      <header className="sticky top-0 z-[100]  bg-orange-500 h-[50px]  border-b-1 border-black ">
        <Header />
      </header>

      <main className="p-4">
        <Outlet />
        <button
          className=" bg-slate-700 fixed bottom-0 right-0"
          onClick={scroll}
        >
          scroll
        </button>
      </main>
    </div>
  );
};

export default Layout;
