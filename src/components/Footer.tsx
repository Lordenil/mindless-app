export const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center gap-6">

          <h3 className="text-lg md:text-xl font-medium">
            Suscríbete a nuestros correos y no te pierdas un lanzamiento 🌐
          </h3>

          <div className="flex w-full max-w-xl border border-neutral-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="flex-grow bg-black text-white px-4 py-3 outline-none"
            />
            <button className="px-6 border-l border-neutral-600 hover:bg-neutral-900 transition">
              →
            </button>
          </div>

          <div className="flex items-center gap-6 text-2xl mt-4">
            <a href="#" className="hover:text-gray-300">📷</a>
            <a href="#" className="hover:text-gray-300">▶️</a>
            <a href="#" className="hover:text-gray-300">🎵</a>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-6 text-center text-sm text-neutral-400">
          <p>© 2025, MIDNLESS · Todos los derechos reservados</p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#" className="hover:text-gray-200">Política de privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-200">Información de contacto</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-200">Política de envío</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-200">Términos del servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
