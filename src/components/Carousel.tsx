import { Carousel } from "flowbite-react";
import img1 from "../assets/collections/collection-1/image-1.jpg";
import img2 from "../assets/collections/collection-1/image-2.jpg";
import img3 from "../assets/collections/collection-1/image-3.jpg";

export const CarouselDefault = () => {
  return (
    <Carousel className="w-full h-56 object-cover rounded">
      <img src={img1} alt="image 1" className="h-full w-full object-cover" />
      <img src={img2} alt="image 2" className="h-full w-full object-cover" />
      <img src={img3} alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
};
