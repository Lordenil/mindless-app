interface OverlayProps {
  readonly isOpen: boolean;
  readonly onClick: () => void;
}

export default function Overlay({ isOpen, onClick }: OverlayProps) {
  if (!isOpen) return null;
  return (
    <input
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="fixed inset-0 bg-black bg-opacity-40 z-20 transition-opacity duration-300"
    />
  );
}
