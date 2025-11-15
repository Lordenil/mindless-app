export const ContactPage = () => {
  return (
    <main>
      <section className="relative w-full h-[400px] lg:h-[550px]">
        <img
          src="/src/assets/header.png"
          alt="model"    
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gray-100/90 p-8">
          <h2 className="text-2xl font-semibold mb-3">
            ENTRETEJIDOS FALL 2025
          </h2>
          <p className="text-gray-700 max-w-3xl">
            La artesanía se convierte en ese espíritu restaurador, de
            reflexiones sobre quiénes somos y podemos ser. Valoramos cómo la
            historia ha tejido memorias vivas de nuestro país, y la cultura como
            un conector de saberes.
          </p>
        </div>
      </section>
    </main>
  );
};
