import {
  CarouselDefault,
  CarouselDefault2,
  CarouselDefault3,
} from "../components/Carousel";
import SinMente from "../assets/sin-mente.jpg";

export const AboutPage = () => {
  return (
    <main className="flex flex-col">
      <section className="relative w-full h-[400px] lg:h-[550px]">
        <img
          src={SinMente}
          alt="model"
          className="w-full h-full object-cover"
        />
      </section>
      <section>
        <div className=" bottom-0 w-full bg-gray-100/90 p-8">
          <h2 className="text-2xl font-semibold mb-3">¿QUENES SOMOS?</h2>
          <p className="text-gray-700 max-w-3xl">
            SIN MENTE es una marca sin género que combina el streetwear con el
            jeanswear de lujo latinoaméricano, produce series limitadas, hechas
            en Colombia, con materiales sostenibles y procesos artesanales
            conscientes. No tiene género, porque la identidad es tan fluida como
            la mente misma. SOY ÈL, SOY ELLA, SOY TODOS EN UNO SOLO" soy
            historia, soy la pieza del molde que no encaja se transforma.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 pt-10">
        <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/t_lGeyd173g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-10">MEMORIAS EN PRESENTE</h3>
          <div>
            <p className="text-gray-700 leading-relaxed">
              “Lo que sana, permanece. Lo que permanece, inspira.” Memorias en
              Presente es una colección que habita dos miradas: la del recuerdo
              ancestral rituales sanadores y la del presente consciente
              herbolaria espiritual. En ese tránsito, la moda se convierte en un
              ritual de sanación y de conexión con el ser. Cada prenda es un
              amuleto que guarda la memoria de lo manual, del gesto lento y de
              la energía que fluye entre materia, cuerpo y espíritu. Rituales
              sanadores evoca lo ancestral, lo que permanece. En ella, los
              saberes antiguos, las técnicas artesanales y la espiritualidad de
              los tejidos se manifiestan como símbolos de protección y arraigo.
              Herbolaria espiritual celebra el presente, la expresión
              contemporánea donde el arte se funde con el universo jeanswear y
              el streetwear, revelando un lenguaje urbano, libre y emocional.
              Ambas convergen en un mismo pulso: la búsqueda del equilibrio
              entre oscuridad y luz, entre lo interno y lo visible. Los acabados
              manuales, las texturas orgánicas y los detalles sensoriales
              transforman cada pieza en un territorio emocional donde la memoria
              no se guarda, se viste. Memorias en Presente es, en esencia, un
              viaje introspectivo traducido en forma, tejido y color. Un
              homenaje a la sensibilidad que sana, a la belleza que permanece en
              la moda como ritual de autenticidad y trascendencia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-4 overflow-hidden rounded-lg">
              <CarouselDefault />
              <h4 className="mt-4 text-lg font-semibold">Colección 1</h4>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <CarouselDefault2 />
              <h4 className="mt-4 text-lg font-semibold">Colección 2</h4>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg">
              <CarouselDefault3 />
              <h4 className="mt-4 text-lg font-semibold">Colección 3</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
