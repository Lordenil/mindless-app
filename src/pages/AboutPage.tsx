export const AboutPage = () => {
  return (
    <main className="flex flex-col">
      <section className="relative w-full h-[400px] lg:h-[550px]">
        <img
          src="/public/header.png"
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

      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Nuestra historia
          </h3>
          <p className="text-gray-700 leading-relaxed">
            La marca emerge desde el respeto profundo por las tradiciones que definen
            nuestras raíces. Esta colección representa un puente entre pasado y futuro,
            manteniendo viva la esencia artesanal mientras exploramos nuevas formas de expresión.
          </p>
        </div>
        <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg">
          <span className="text-gray-600">Aquí va el video</span>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-2xl font-semibold mb-10">
            Colecciones
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="/coleccion1.png"
                alt="coleccion 1"
                className="w-full h-56 object-cover rounded"
              />
              <h4 className="mt-4 text-lg font-semibold">Colección 1</h4>
              <p className="text-gray-700 text-sm mt-2">
                Descripción corta de esta colección y su inspiración.
              </p>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="/coleccion2.png"
                alt="coleccion 2"
                className="w-full h-56 object-cover rounded"
              />
              <h4 className="mt-4 text-lg font-semibold">Colección 2</h4>
              <p className="text-gray-700 text-sm mt-2">
                Otra colección con enfoque artesanal y moderno.
              </p>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="/coleccion3.png"
                alt="coleccion 3"
                className="w-full h-56 object-cover rounded"
              />
              <h4 className="mt-4 text-lg font-semibold">Colección 3</h4>
              <p className="text-gray-700 text-sm mt-2">
                Detalles sobre esta línea y su proceso creativo.
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="/coleccion3.png"
                alt="coleccion 3"
                className="w-full h-56 object-cover rounded"
              />
              <h4 className="mt-4 text-lg font-semibold">Colección 3</h4>
              <p className="text-gray-700 text-sm mt-2">
                Detalles sobre esta línea y su proceso creativo.
              </p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="/coleccion3.png"
                alt="coleccion 3"
                className="w-full h-56 object-cover rounded"
              />
              <h4 className="mt-4 text-lg font-semibold">Colección 3</h4>
              <p className="text-gray-700 text-sm mt-2">
                Detalles sobre esta línea y su proceso creativo.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
