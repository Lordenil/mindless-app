import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main className="pt-20">
      <Header onToggleMenu={() => setMenuOpen(true)} />
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Overlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />
      <div>
        <Outlet />
      </div>
    </main>
  );
};
