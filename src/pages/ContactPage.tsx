export const ContactPage = () => {
  return (
    <main className="pt-20">
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1609897981032-9b1eeb51f0b3"
          alt="model"
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute bottom-0 w-full bg-gray-100 bg-opacity-90 p-8">
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
