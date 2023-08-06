import Image, { StaticImageData } from "next/image";
import imageHome from "../../assets/imageHome.png";
import imageHome2 from "../../assets/imageHome2.jpg";
import imageHome3 from "../../assets/imageHome3.jpg";
import imageHome4 from "../../assets/imageHome4.jpeg";

interface ICardImageProps {
  image: string | StaticImageData;
  title: string;
  subTitle: string;
}

const mock: ICardImageProps[] = [
  {
    image: imageHome,
    title: `zaha hadid`,
    subTitle: `Centro de Arte Contemporânea de Cincinnati`,
  },
  {
    image: imageHome4,
    title: `peter eisenman`,
    subTitle: `Centro de Artes Wexner`,
  },
  {
    image: imageHome2,
    title: `frank gehry`,
    subTitle: `Louis Vuitton Foundation`,
  },
  {
    image: imageHome3,
    title: `daniel libeskind`,
    subTitle: `national holocaust monument`,
  },
];

export default function CardImage() {
  return (
    <div className="flex my-12 w-full h-[40rem] overflow-hidden">
      {mock.map((item, index) => (
        <div
          key={index}
          className="group/item flex-1 hover:flex-[2]  overflow-hidden transition-all duration-300 relative"
        >
          <div className="absolute left-14 top-9 z-50">
            <h1 className="text-2xl font-bold animate-in fade-in duration-1000">
              {item.title}
            </h1>
          </div>
          <div className="absolute bottom-6 left-9 z-50 -rotate-90 group-hover/item:rotate-0 transition-all duration-300 origin-top-left">
            <div className="relative px-2">
              <p className="z-20">{item.subTitle}</p>
              <div className="absolute rounded -z-10 bg-gradient-to-r inset-0 from-black/70 to-transparent opacity-0 group-hover/item:opacity-100 delay-300 duration-300"></div>
            </div>
          </div>
          <Image src={item.image} alt="" className="max-w-none h-full" />
          <div className="bg-gradient-to-t from-black to-transparent z-10 absolute inset-0 opacity-100 transition-opacity duration-300 group-hover/item:opacity-0"></div>
        </div>
      ))}
    </div>
  );
}
