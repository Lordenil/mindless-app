import { Menu } from "lucide-react";

interface HeaderProps {
  readonly onToggleMenu: () => void;
}

export default function Header({ onToggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-30 flex justify-between items-center px-6 py-4 bg-white z-20 shadow-sm">
      <button onClick={onToggleMenu} aria-label="Abrir menú lateral">
        <Menu size={28} />
      </button>
      <h1 className="text-2xl font-semibold tracking-widest">MINDLESS</h1>
      <div className="flex gap-4">
        <button aria-label="Buscar">🔍</button>
        <button aria-label="Usuario">👤</button>
        <button aria-label="Carrito">👜</button>
      </div>
    </header>
  );
}
