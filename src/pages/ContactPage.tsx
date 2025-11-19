import SinMente from "../assets/sin-mente.jpg";

export const ContactPage = () => {
  return (
    <main>
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
    </main>
  );
};
