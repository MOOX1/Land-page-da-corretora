import Image, { StaticImageData } from "next/image";
import imageHome from "../../assets/imageHome.png";
import imageHome2 from "../../assets/imageHome2.jpg";
import imageHome3 from "../../assets/imageHome3.jpg";
import imageHome4 from "../../assets/imageHome4.jpeg";

interface CardImageProps {
  title: string;
  location: string;
  image: string | StaticImageData;
}

const arrayEmpreendimentos: CardImageProps[] = [
  {
    image: imageHome,
    title: "Zaha Hadid",
    location: "Centro de Arte Contemporânea de Cincinnati",
  },
  {
    image: imageHome2,
    title: "Frank Gehry",
    location: "Louis Vuitton Foundation",
  },
  {
    image: imageHome3,
    title: "Peter Eisenman",
    location: "Centro de Artes Wexner",
  },
  {
    image: imageHome4,
    title: "daniel libeskind",
    location: "national holocaust monument",
  },
];

export default function CardImage() {
  return (
    <div className="w-full  flex  h-[40rem] my-52 overflow-hidden">
      {arrayEmpreendimentos?.map((item, index) => (
        <div
          key={index}
          className="group/item cursor-pointer transition-all duration-300 w-1/4 flex-1 hover:flex-[2] h-auto overflow-hidden relative bg-blue-200"
        >
          <div className="z-50 absolute left-14 top-16 ">
            <h1 className=" text-2xl font-bold text-white whitespace-nowrap">
              {item.title}
            </h1>
          </div>
          <div className=" z-50 absolute left-9 origin-top-left -rotate-90 group-hover/item:rotate-0  transition-all duration-300   bottom-6">
            <div className="relative px-2">
              <p className=" z-50  text-base font-normal text-white whitespace-nowrap">
                {item.location}
              </p>
              <div className="-z-10 absolute rounded delay-300 w-full h-full bg-gradient-to-r inset-0 from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 "></div>
            </div>
          </div>

          <Image
            src={item.image}
            className=" max-w-none h-full aspect-video  absolute"
            alt=""
          />
          <div className="bg-gradient-to-t from-black to-transparent opacity-100 duration-300 transition-all group-hover/item:opacity-0 absolute inset-0"></div>
        </div>
      ))}
    </div>
  );
}
