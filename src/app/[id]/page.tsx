import About from "@/components/About";
import SliderBanner from "@/components/SlideBanner";
import { IEmpreendimentosProps } from "@/lib/schemas/Empreendimentos";
import { Bath, BedDouble, Ruler } from "lucide-react";
import Image from "next/image";

interface IEmpreendimento {
  params: {
    id: string;
  };
}

const getEmpreendimento = async (
  id: string
): Promise<IEmpreendimentosProps | undefined> => {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/empreendimentos/findOne?id=${id}`,
      {
        next: {
          revalidate: 0,
        },
      }
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.log(error);
  }
};

export default async function Empreendimento({ params }: IEmpreendimento) {
  const empreendimento = await getEmpreendimento(params.id);

  const urlMaps = empreendimento?.localizacao.split('src="')[1].split('"')[0];

  return (
    <div>
      <SliderBanner image={empreendimento?.imageMain ?? ""} />
      <div className="flex sm:flex-col md:flex-row gap-8 md:mt-10 sm:pt-4 md:pt-0">
        <div className="flex-1 md:pl-20 md:mt-14 sm:items-center  flex flex-col md:items-baseline gap-6">
          <h1 className="text-3xl sm:w-full md:w-min md:whitespace-nowrap sm:text-center md:text-left">
            {empreendimento?.name}
          </h1>
          <p className="md:pl-10 md:text-left sm:text-justify sm:w-4/5 md:w-full">
            {empreendimento?.description}
          </p>
          <div className="flex md:flex-row sm:flex-row-reverse justify-evenly w-full  p-2 rounded">
            <div className="flex flex-col items-center">
              <BedDouble />
              {empreendimento?.specifications.bedrooms} Quartos
            </div>

            <div className="flex  flex-col items-center">
              <Ruler />
              {empreendimento?.specifications.houseSize}m²
            </div>
            <div className="flex flex-col items-center">
              <Bath />
              {empreendimento?.specifications.bathroom} Banheiros
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-end aspect-video w-full h-auto">
          <Image
            src={empreendimento?.imagePlant ?? ""}
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center my-8">
        <iframe
          src={urlMaps}
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <About />
    </div>
  );
}
