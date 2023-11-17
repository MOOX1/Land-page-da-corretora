import Image, { StaticImageData } from "next/image";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";
import Link from "next/link";

export default function CardImage({ data }: { data: IEmpreendimentosProps[] }) {
  return (
    <div className="w-full  flex sm:flex-wrap h-[40rem]  overflow-hidden">
      {data?.map((item, index) => {
        if (index == 0) return;
        return (
          <Link
            href={`/${item._id}`}
            key={index}
            className="group/item cursor-pointer transition-all duration-300 w-1/4 md:flex-1 flex-wrap sm:w-[50%] md:hover:flex-[2] h-auto overflow-hidden relative bg-blue-200"
          >
            <div className="z-50 absolute sm:left-5 sm:top-10 left-14 top-16 ">
              <h1 className=" text-2xl sm:text-lg font-bold text-white whitespace-nowrap">
                {item.name}
              </h1>
            </div>
            <div className=" z-50 absolute left-9 origin-top-left -rotate-90 group-hover/item:rotate-0  transition-all duration-300   bottom-6">
              {/* <div className="relative px-2">
                <p className=" z-50  text-base font-normal text-white whitespace-nowrap">
                  {item.localizacao}
                </p>
                <div className="-z-10 absolute rounded delay-300 w-full h-full bg-gradient-to-r inset-0 from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 "></div>
              </div> */}
            </div>

            <Image
              src={item.imageMain}
              width={1000}
              height={1000}
              className=" max-w-none h-full aspect-video  absolute"
              alt=""
            />
            <div className="bg-gradient-to-t from-gray-700 to-transparent opacity-40 duration-300 transition-all group-hover/item:opacity-0 absolute inset-0"></div>
          </Link>
        );
      })}
    </div>
  );
}
