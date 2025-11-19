import { useNavigate } from "react-router-dom";

interface SidebarProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-bold tracking-widest">SIN MENTE</h2>
        <button onClick={onClose} aria-label="Cerrar menú lateral">
          ✕
        </button>
      </div>

      <nav className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
        <button
          onClick={() => {
            handleNavigation("/");
          }}
          className="text-left"
        >
          INICIO
        </button>
        <button
          onClick={() => {
            handleNavigation("/about");
          }}
          className="text-left"
        >
          SOBRE NOSOTROS
        </button>
        {/* <div className="flex justify-between items-center">
          <div>COLECCIONES</div>
          <span>→ Proximamente</span>
        </div> */}
        <button
          onClick={() => {
            handleNavigation("/contact");
          }}
          className="text-left"
        >
          CONTACTO
        </button>
      </nav>

      <div className="absolute bottom-4 left-6 flex space-x-4 text-xl">
        <a href="https://www.instagram.com/" aria-label="Instagram">
          📷
        </a>
        <a href="https://www.instagram.com/" aria-label="TikTok">
          🎵
        </a>
        <a href="https://www.instagram.com/" aria-label="YouTube">
          ▶️
        </a>
      </div>
    </aside>
  );
}
