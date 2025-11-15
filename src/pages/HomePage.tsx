import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import Sidebar from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main className="">
      <Header onToggleMenu={() => setMenuOpen(true)} />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <div className="">
        <Outlet />
      </div>
      <Footer></Footer>
    </main>
  );
};
